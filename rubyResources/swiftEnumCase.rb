class SwiftEnumCase

  def initialize(name)
    @name = name
  end

  def to_json(*args)
    @name.gsub!(/[\s]{2,}/, ' ')
    @name.gsub!(/[\n\r]*/, '')

    return JSON.pretty_generate({
      'name' => @name.strip
    })
  end

end
