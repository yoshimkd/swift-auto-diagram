def entitiesFromFiles
  entities = []
  extensions = []

  $allSwiftFilePaths.each { |fileName|
    fileContents = File.open(fileName, 'r:UTF-8').read

    Logger.log.info 'Original contents of file ' + fileName + ':'
    Logger.log.info Logger.safeCodeContents(fileContents)

    cleanedFileContents = removeCommentsAndStringsInCodeString fileContents

    entities += createEntities cleanedFileContents
    extensions += allExtensions cleanedFileContents

    Logger.log.info 'Finished parsing contents of file ' + fileName + "\n"
  }

  Logger.log.info 'Starting parsing inherited entities'
  parseInheritedEntities entities
  Logger.log.info 'Finished parsing inherited entities'

  Logger.log.info 'Starting parsing extensions'
  entities += parseExtensions extensions, entities
  Logger.log.info 'Finished parsing extensions'

  return entities
end

def removeCommentsAndStringsInCodeString codeString
  codeString.gsub! /".*"/, ''

  Logger.log.info 'Removed strings from the content. Updated contents:'
  Logger.log.info Logger.safeCodeContents(codeString)

  while codeString.include?('/*') && codeString.include?('*/')
    codeString.gsub! /\/\*((?!(\/\*|\*\/))[\S\s])*\*\//, ''
    Logger.log.info 'Removing multiline comments from the content. Updated contents:'
    Logger.log.info Logger.safeCodeContents(codeString)
  end

  Logger.log.info 'Removed multiline comments from the content. Updated contents:'
  Logger.log.info Logger.safeCodeContents(codeString)

  codeString.gsub! /\/\/.*$/, ''

  Logger.log.info 'Removed single line comments from the content. Updated contents:'
  Logger.log.info Logger.safeCodeContents(codeString)

  return codeString
end

def createEntities codeString
  return allEntities(codeString).each { |entity|
    entity.methods =
    entity.typeString == 'protocol' ?
    (allProtocolMethods(entity.contentsCodeString) +
    allProtocolInits(entity.contentsCodeString)) :
    (allMethods(entity.contentsCodeString) +
    allInits(entity.contentsCodeString))

    entity.properties = allProperties entity.contentsCodeString
    entity.cases = allCases entity.contentsCodeString
  }
end

def allEntities codeString
  entities = []
  entityRegex = /(?<entityType>(class|struct|protocol|enum))\s+(?!(var|open|public|internal|fileprivate|private|func))(?<name>\w+)(?<genericPart>(<.*>)?)(?<inheritancePart>([^{]*)?)(?<contentsCodeString>{(?>[^{}]|\g<contentsCodeString>)*})/

  codeString.scan(entityRegex) {
    matchData = Regexp.last_match

    entityType = matchData['entityType']
    entityName = matchData['name']

    inheritancePart = matchData['inheritancePart']
    inheritancePart.gsub! ':', ''
    inheritancePart.gsub! /\s/, ''
    inheritedEntities = inheritancePart.split ','

    contentsCodeString = matchData['contentsCodeString'][1...-1]

    startIndex = matchData.begin(0)
    contentsStartIndex = matchData.begin('contentsCodeString') + 1
    contentsEndIndex = matchData.end('contentsCodeString') - 1

    subEntities = allEntities contentsCodeString
    entities += subEntities

    subEntitiesContents = subEntities.map { |subEntity|
      contentsCodeString[(subEntity.startIndex)..(subEntity.contentsEndIndex)]
    }.each { |subEntityContents|
      contentsCodeString.gsub! subEntityContents, ''
    }

    newEntity = EntityType.new(entityType, entityName, inheritedEntities,
    contentsCodeString, startIndex, contentsStartIndex, contentsEndIndex)

    newEntity.containedEntities += subEntities

    entities << newEntity
  }

  return entities
end

def allExtensions codeString
  extensions = []
  extensionRegex = /extension\s+(?!(var|open|public|internal|fileprivate|private|func))(?<extendedEntityName>\w+)(?<protocols>(\s*:.+?)?)(?<generics>(\s+where\s+.+?)?)(?<contentsCodeString>{(?>[^{}]|\g<contentsCodeString>)*})/

  codeString.scan(extensionRegex) {
    matchData = Regexp.last_match

    extendedEntityName = matchData['extendedEntityName']

    protocols = matchData['protocols']
    protocols.gsub! ':', ''
    protocols.gsub! /\s/, ''
    protocols = protocols.split ','

    contentsCodeString = matchData['contentsCodeString'][1...-1]

    extensions << EntityExtension.new(protocols, extendedEntityName, contentsCodeString)
  }

  return extensions
end

def allMethods codeString
  methods = []
  methodRegex =/(?<otherKeywords>(override|open|public|internal|fileprivate|private|static|class|\s)*)\bfunc\s+(?<name>([^{]*))(?<methodBody>{(?>[^{}]|\g<methodBody>)*})/

  methodsStrings = []

  codeString.scan(methodRegex) {
    matchData = Regexp.last_match

    otherKeywords = matchData['otherKeywords'].gsub(/\s{2,}/, ' ').strip.split(' ')

    accessLevel = 'internal'
    type = 'instance'

    otherKeywords.each { |otherKeyword|
      if otherKeyword == 'open' ||
        otherKeyword == 'public' ||
        otherKeyword == 'internal' ||
        otherKeyword == 'fileprivate' ||
        otherKeyword == 'private'

        accessLevel = otherKeyword

      elsif otherKeyword == 'static' ||
        otherKeyword == 'class'

        type = 'type'

      end
    }

    methods << SwiftMethod.new(matchData['name'], type, accessLevel)
    methodsStrings << matchData[0]
  }

  methodsStrings.each { |methodString|
    codeString.gsub! methodString, ''
  }

  return methods
end

def allInits codeString
  methods = []
  methodRegex = /(?<otherKeywords>(override|open|public|internal|fileprivate|private|\s)+)(?<name>(init[^{]*))(?<methodBody>{(?>[^{}]|\g<methodBody>)*})/

  methodsStrings = []

  codeString.scan(methodRegex) {
    matchData = Regexp.last_match

    otherKeywords = matchData['otherKeywords'].gsub(/\s{2,}/, ' ').strip.split(' ')

    accessLevel = 'internal'
    type = 'instance'

    otherKeywords.each { |otherKeyword|
      if otherKeyword == 'open' ||
        otherKeyword == 'public' ||
        otherKeyword == 'internal' ||
        otherKeyword == 'fileprivate' ||
        otherKeyword == 'private'

        accessLevel = otherKeyword
      end
    }

    methods << SwiftMethod.new(matchData['name'], type, accessLevel)
    methodsStrings << matchData[0]
  }

  methodsStrings.each { |methodString|
    codeString.gsub! methodString, ''
  }

  return methods
end

def allProtocolMethods codeString
  methods = []
  methodRegex = /((?<isStatic>static)\s+)?func\s+(?<name>((?!static|var|weak|unowned|func|init)[\S\s])+)/

  methodsStrings = []

  codeString.scan(methodRegex) {
    matchData = Regexp.last_match

    type = matchData['isStatic'] == 'static' ? 'type' : 'instance'

    methods << SwiftMethod.new(matchData['name'].strip, type, 'internal')
    methodsStrings << matchData[0]
  }

  methodsStrings.each { |methodString|
    codeString.gsub! methodString, ''
  }

  return methods
end

def allProtocolInits codeString
  methods = []
  methodRegex = /\binit\(((?!static|var|weak|unowned|func|init)[\S\s])+/

  methodsStrings = []

  codeString.scan(methodRegex) {
    matchData = Regexp.last_match
    methods << SwiftMethod.new(matchData[0].strip, 'instance', 'internal')
    methodsStrings << matchData[0]
  }

  methodsStrings.each { |methodString|
    codeString.gsub! methodString, ''
  }

  return methods
end

def allProperties codeString
  properties = []
  propertyRegex = /(?<otherKeywords>(open|public|internal|fileprivate|private|static|class|struct|weak|unowned|\s)+)?(?<name>(\bvar|\blet)\s+(\w+)\s*((?!open|public|internal|fileprivate|private|static|class|struct|var|let|weak|unowned|@IBOutlet|@IBAction|@IBInspectable|@IBDesignable)[^{=])*)/
  codeString.scan(propertyRegex) {
    matchData = Regexp.last_match

    accessLevel = 'internal'
    type = 'instance'

    if matchData['otherKeywords']
      otherKeywords = matchData['otherKeywords'].strip.split(' ')
      otherKeywords.each { |otherKeyword|
        if otherKeyword == 'open' ||
          otherKeyword == 'public' ||
          otherKeyword == 'internal' ||
          otherKeyword == 'fileprivate' ||
          otherKeyword == 'private'

          accessLevel = otherKeyword

        elsif otherKeyword == 'static' ||
          otherKeyword == 'class'

          type = 'type'

        end
      }
    end

    properties << SwiftProperty.new(matchData['name'], type, accessLevel)
  }

  return properties
end

def allCases codeString
  cases = []
  caseRegex = /case\s+(?<cases>[\w\,\s]+)/
  codeString.scan(caseRegex) {
    matchData = Regexp.last_match

    accessLevel = 'internal'
    type = 'instance'

    if matchData['cases']
      cases += matchData['cases'].strip.split(', ')
    end
  }

  return cases.map{|c| SwiftEnumCase.new(c)}
end

def parseInheritedEntities entities
  entities.each { |entity|
    entity.inheritedEntities.each_with_index { |inheritedEntity, index|

      willBreak = false
      for searchedEntity in entities
        if inheritedEntity == searchedEntity.name
          if searchedEntity.typeString == 'class'
            entity.superClass = searchedEntity
          elsif searchedEntity.typeString == 'protocol'
            entity.protocols << searchedEntity
          end

          willBreak = true
          break
        end
      end

      if willBreak
        break
      end

      newEntity = EntityType.new((index == 0 ? 'class' : 'protocol'), inheritedEntity, [], nil, nil, nil, nil)
      entities << newEntity
      if index == 0
        entity.superClass = newEntity
      else
        entity.protocols << newEntity
      end
    }
  }
end

def parseExtensions extensions, entities
  extensions.each { |extension|
    extension.methods = allMethods(extension.contentsCodeString) +
    allInits(extension.contentsCodeString)

    extension.properties = allProperties extension.contentsCodeString

    willBreak = false
    entities.each { |entity|
      if extension.extendedEntityName == entity.name
        entity.extensions << extension
        willBreak = true
        break
      end
    }

    if !willBreak
      newEntity = EntityType.new('class', extension.extendedEntityName, [], nil, nil, nil, nil)
      newEntity.extensions << extension
      entities << newEntity
    end

    extension.inheritedEntities.each { |inheritedEntity|
      willBreak = false
      entities.each { |entity|
        if inheritedEntity == entity.name
          extension.protocols << entity
          willBreak = true
          break
        end
      }

      if !willBreak
        newEntity = EntityType.new('protocol', inheritedEntity, [], nil, nil, nil, nil)
        extension.protocols << newEntity
        entities << newEntity
      end
    }
  }
end

def updateEntitiesJSONStringInScript entitiesStrings, scriptFileName, scriptTemplateString
  scriptTemplateString = File.open(scriptTemplateString, 'r').read
  scriptTemplateString.gsub! '$entities', entitiesStrings
  File.write scriptFileName, scriptTemplateString
end

def openFile fileName
  system %{open "#{fileName}"}
end
