require 'logger'

class Logger
  attr_accessor :shouldWriteToFile

  @@logFileName = 'log.txt'

  def self.startLoggingToFile
    if File.exist? @@logFileName
      File.delete @@logFileName
    end
    self.log.shouldWriteToFile = true
  end

  def self.safeCodeContents codeContents
    return codeContents.gsub /\b(?!(import|class|protocol|struct|enum|extension|func|init|let|var|weak|unowned|required|convenience|open|public|internal|fileprivate|private))\w+\b/, 'X'
  end

  def self.log
    if @logger.nil?
      @logger = Logger.new STDOUT
      @logger.level = Logger::WARN

      @shouldWriteToFile = false

      @logger.formatter = proc do |_, _, _, message|
        if self.log.shouldWriteToFile
          open(@@logFileName, 'a') do |file|
            file << message + "\n"
          end
        end
        message + "\n"
      end
    end
    @logger
  end
end
