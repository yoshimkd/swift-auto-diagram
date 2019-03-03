require 'logger'

class Logger
  def self.safeCodeContents(codeContents)
    codeContents.gsub /\b(?!(import|class|protocol|struct|enum|extension|func|init|let|var|weak|unowned|required|convenience|open|public|internal|fileprivate|private))\w+\b/, 'X'
  end

  def self.log
    if @logger.nil?
      @logger = Logger.new STDOUT
      @logger.level = Logger::WARN

      @logger.formatter = proc do |_, _, _, message|
        message + "\n"
      end
    end
    @logger
  end
end
