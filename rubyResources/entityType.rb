class EntityType < Entity

  attr_accessor :name
  attr_accessor :startIndex
  attr_accessor :contentsStartIndex
  attr_accessor :contentsEndIndex

  attr_accessor :superClass
  attr_accessor :containedEntities
  attr_accessor :extensions

  def initialize(typeString, name, inheritedEntities, contentsCodeString, startIndex, contentsStartIndex, contentsEndIndex)
    super(inheritedEntities, typeString, contentsCodeString)

    @name = name
    @startIndex = startIndex
    @contentsStartIndex = contentsStartIndex
    @contentsEndIndex = contentsEndIndex

    @containedEntities = []
    @extensions = []
  end

  def to_json(*args)
    hash = to_hash

    hash['name'] = @name

    if @superClass
      hash['superClass'] = @superClass.id
    end

    if !@containedEntities.empty?
      hash['containedEntities'] = @containedEntities.map { |containedEntity|
        containedEntity.id
      }
    end

    if !@extensions.empty?
      hash['extensions'] = @extensions.map { |extension|
        extension.id
      }
    end

    return JSON.pretty_generate(hash)
  end

end
