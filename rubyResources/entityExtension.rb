class EntityExtension < Entity

  attr_accessor :extendedEntityName

  def initialize(inheritedEntities, extendedEntityName, contentsCodeString)
    super(inheritedEntities, 'extension', contentsCodeString)

    @extendedEntityName = extendedEntityName
  end

end
