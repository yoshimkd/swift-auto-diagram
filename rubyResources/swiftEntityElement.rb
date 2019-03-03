class SwiftEntityElement
  def initialize(name, type, accessLevel)
    @name = name
    @type = type
    @accessLevel = accessLevel
  end

  def to_json(*_args)
    @name.gsub!(/[\s]{2,}/, ' ')
    @name.gsub!(/[\n\r]*/, '')

    JSON.pretty_generate(
      'name' => @name.strip,
      'type' => @type,
      'accessLevel' => @accessLevel
    )
  end
end
