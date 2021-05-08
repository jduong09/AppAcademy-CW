class LRUCache
  def initialize(n)
    @size = n
    @store = []
  end

  def count
    # returns number of elements currently in cache
    @store.count
  end

  def add(ele)
    # adds element to cache according to LRU principle
    if @store.include?(ele)
      @store.delete(ele)
      @store << ele
    elsif count >= @size
      @store.shift
      @store << ele
    else
      @store << ele
    end
  end

  def show
    # shows the items in the cache, with the LRU item first
    @store
  end

  private
  # helper methods go here!
  def dupe?(ele)
    @store.each do |element|
      return true if element == ele
    end
    return false
  end

  def find_element(ele)
    index = 0

    @store.each do |element|
      if element != ele
        index += 1
      elsif element == ele
        return index
      end
    end
  end

end

johnny_cache = LRUCache.new(4)

johnny_cache.add("I walk the line")
johnny_cache.add(5)

johnny_cache.count # => returns 2

johnny_cache.add([1,2,3])
johnny_cache.add(5)
johnny_cache.add(-5)
johnny_cache.add({a: 1, b: 2, c: 3})
johnny_cache.add([1,2,3,4])
johnny_cache.add("I walk the line")
johnny_cache.add(:ring_of_fire)
johnny_cache.add("I walk the line")
johnny_cache.add({a: 1, b: 2, c: 3})

p johnny_cache.show # => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]