class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    each_with_index.inject(0) do |intermediate_hash, (el, i)|
      (el.hash + i.hash) ^ intermediate_hash
    end
    #return 0.hash if self.empty?
    #bit = nil

    #each do |ele|
      #num = ele.hash % length
      
      #bit = num if bit == nil

      #bit ^ num
    #end

    #bit
  end
end

class String
  def hash
    alphabet = ("a".."z").to_a

    array_of_string = self.split("")
    char_index = array_of_string.map { |char| alphabet.find_index(char.downcase) }
    
    char_index.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    to_a.sort_by(&:hash).hash
  end
end
