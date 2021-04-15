class PolyTreeNode
  attr_reader :value, :parent, :children
  def initialize(value)
    @value = value
    @parent = nil
    @children = []
  end

  def parent=(node)
    if node == nil
      @parent = nil
    else
      if @parent == nil
        @parent = node
      else
        current_parent = @parent
        current_parent.children.delete(self)

        @parent = node
      end
      node.children << self unless node.children.include?(self)
    end
  end

  def add_child(child_node)
    child_node.parent = self
  end

  def remove_child(child_node)
    if child_node && !self.children.include?(child_node)
      raise "Incorrectly removing node that isn't a child."
    end

    child_node.parent = nil
  end

  def dfs(target_value)
    return self if @value == target_value

    @children.each do |child|
      result = child.dfs(target_value)
      return result unless result.nil?
    end
    
    nil
  end

  def bfs(target_value)
    queue = []
    queue << self

    while !queue.empty?
      current_node = queue[0]

      return current_node if current_node.value == target_value

      current_node.children.each do |child|
        queue << child
      end
      
      queue.shift
    end
  end
  
end