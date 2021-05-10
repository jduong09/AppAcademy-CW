class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
    @prev.next = @next
    @next.prev = @prev
  end
end

class LinkedList
  include Enumerable
  attr_reader :head, :tail

  def initialize
    @head = Node.new
    @tail = Node.new
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    if @head.next == @tail && @tail.prev == @head
      return true
    else
      return false
    end
  end

  def get(key)
    each do |node|
      if node.key == key
        return node.val
      end
    end
    return nil
  end

  def include?(key)
    return true if get(key) != nil
    return false
  end

  def append(key, val)
    new_node = Node.new(key, val)
    last_node = @tail.prev
    last_node.next = new_node
    @tail.prev = new_node
    new_node.next = @tail
    new_node.prev = last_node
    nil
  end

  def update(key, val)
    each do |node|
      if node.key == key
        node.val = val
      end
    end
    nil
  end

  def remove(key)
    each do |node|
      if node.key == key
        node.remove
      end
    end
    nil
  end

  def each
    current_node = self.head.next
    until current_node == self.tail
      yield current_node
      current_node = current_node.next
    end
  end

  # uncomment when you have `each` working and `Enumerable` included
  # def to_s
  #   inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  # end
end
