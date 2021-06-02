class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # ...
    names.each do |name|
      define_method(name) do 
        instance_variable_get("@#{name}")
      end

      # define_method with parameters (value) passes the parameters as arguments in the newly created method
      define_method("#{name}=") do |value|
        instance_variable_set("@#{name}", value)
      end
    end
  end
end
