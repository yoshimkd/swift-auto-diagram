class EntityExtension < Entity
  attr_accessor :extendedEntityName

  def initialize(inheritedEntities, extendedEntityName, contentsCodeString)
    super(inheritedEntities, 'extension', contentsCodeString)

    @extendedEntityName = extendedEntityName
  end

  def to_json(*_args)
    hash = to_hash

    hash['extendedEntityName'] = @extendedEntityName
    JSON.pretty_generate(hash)
  end

end
