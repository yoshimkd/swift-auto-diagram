class Entity
  @@id = 1

  attr_accessor :id
  attr_accessor :inheritedEntities

  attr_accessor :typeString

  attr_accessor :contentsCodeString

  attr_accessor :protocols

  attr_accessor :methods
  attr_accessor :properties
  attr_accessor :cases

  def initialize(inheritedEntities, typeString, contentsCodeString)
    @id = @@id
    @@id += 1

    @inheritedEntities = inheritedEntities

    @typeString = typeString

    @contentsCodeString = contentsCodeString

    @protocols = []
    @methods = []
    @properties = []
    @cases = []
  end

  def to_hash
    hash = {
      'id' => @id,
      'typeString' => @typeString
    }

    hash['properties'] = @properties unless @properties.empty?

    hash['methods'] = @methods unless @methods.empty?

    hash['protocols'] = @protocols.map(&:id) unless @protocols.empty?

    hash['cases'] = @cases unless @cases.empty?

    hash
  end

  def to_json(*_args)
    JSON.pretty_generate(to_hash)
  end
end
