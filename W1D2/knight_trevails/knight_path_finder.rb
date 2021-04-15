require_relative "../skeleton/lib/00_tree_node.rb"

class KnightPathFinder
  attr_reader :starting_position
  attr_accessor :root_node, :considered_positions

  def initialize(starting_position)
    @starting_position = starting_position
    @considered_positions = [starting_position]
    build_move_tree
  end

  def build_move_tree
    self.root_node = PolyTreeNode.new(starting_position)

    queue = [root_node]

    until queue.empty?
      current_node = queue[0]

      current_pos = current_node.value

      new_move_positions(current_pos).each do |next_pos|
        next_node = PolyTreeNode.new(next_pos)
        current_node.add_child(next_node)
        queue << next_node
      end

      queue.shift
    end
  end

  def find_path(ending_position)
    final_node = root_node.dfs(ending_position)

    trace_path_back(final_node)
  end

  def trace_path_back(node)
    path = []

    current_node = node
    until current_node.nil?
      path.unshift(current_node.value)
      current_node = current_node.parent
    end
    path
  end

  def self.valid_moves(pos)
    valid_moves = []
    moves = [[-2, -1], [-2,  1], [-1, -2], [-1,  2], [ 1, -2], [ 1,  2], [ 2, -1], [ 2,  1]]

    x = pos[0]
    y = pos[1]
    moves.each do |move|
      new_pos = [x + move[0], y + move[1]]

      if new_pos.all? { |coord| coord.between?(0, 7) }
        valid_moves << new_pos
      end
    end

    valid_moves
  end

  def new_move_positions(pos)
    KnightPathFinder.valid_moves(pos)
      .reject { |new_pos| considered_positions.include?(new_pos) }
      .each { |new_pos| considered_positions << new_pos }
  end
end

kpf = KnightPathFinder.new([0,0])

print kpf.find_path([7,6])
print kpf.find_path([6,2])

