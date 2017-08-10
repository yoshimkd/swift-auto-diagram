require_relative 'rubyResources/logger.rb'
require_relative 'rubyResources/swiftEntityElement.rb'
require_relative 'rubyResources/swiftMethod.rb'
require_relative 'rubyResources/swiftProperty.rb'
require_relative 'rubyResources/entity.rb'
require_relative 'rubyResources/entityExtension.rb'
require_relative 'rubyResources/entityType.rb'
require_relative 'rubyResources/swiftEnumCase.rb'
require_relative 'rubyResources/helpers.rb'

require 'optparse'
require 'json'

parser = OptionParser.new do |options|
	options.on('-v', '--verbose', 'Displays full logs') do
    Logger.log.level = Logger::DEBUG
    Logger.log.info "Will display full logs"
	end

	options.on('-h', '--help', 'Displays Help') do
		puts options
		exit
	end

  options.on('-f', '--file', 'Writes the log to a file') do
		Logger.startLoggingToFile
	end
end

parser.parse!

Logger.log.info "Starting generation of class diagram"

$allSwiftFilePaths = []

if !ARGV.empty?
  Logger.log.info 'Checking the command line arguments'

  ARGV.each { |folderOrFile|
    if File.directory? folderOrFile
      $allSwiftFilePaths += (Dir.glob folderOrFile + '/**/*.swift')
      Logger.log.info 'Added the directory\'s file path and all it\'s contents: ' + folderOrFile + ' to the target'
    elsif File.file?(folderOrFile) && (File.extname(folderOrFile) == '.swift')
      $allSwiftFilePaths << folderOrFile
      Logger.log.info 'Added the file\'s file path: ' + folderOrFile + ' to the target'
    else
      abort 'The argument \'' + folderOrFile + '\' is not a directory and does not have a \'.swift\' extension'
    end
  }
else
  Logger.log.info 'No command line arguments supplied meaning this script\'s containing directory will be the target'
  $allSwiftFilePaths = Dir.glob __dir__ + '/**/*.swift'
end

Logger.log.info 'The targeted swift files: ' + $allSwiftFilePaths.to_s + "\n"

#########################

resourcesFilePath = __dir__ + '/htmltemplate/js/'

updateEntitiesJSONStringInScript entitiesFromFiles.to_json,
resourcesFilePath + 'diagram.js',
resourcesFilePath + 'diagramTemplate'

openFile __dir__ + '/htmltemplate/diagram.html'
