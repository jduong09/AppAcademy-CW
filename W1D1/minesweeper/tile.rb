require_relative "board"
# Tile
 # reveal the value of the position
      # if not a bomb, then put r (done)
      # if bomb, then put B (done)
      # if an adjacent tile is blank and all adjacent's of it are blanks, then reveal it as "r"
      # if an adjacent tile is blank and it has adjacent tiles that are bombs, then place a number with how many bombs are bordering it.
class Tile
  attr_reader :value
  def initialize(board, pos)
    @value = "*"
    @board = board
    @pos = pos
  end

  def become_bomb
    @value = "b"
  end

  def flag
    @value = "F"
  end

  def reveal
    return self if @value == "f"

    return self if @value == "r"

    @value = "r"
    
    return self if neighbors.empty?

    if value != "b" && adjacent_bomb_count == 0
      neighbors.each do |neighbor|
        neighbor.reveal
        neighbor.render
      end
    end

    self
  end

  def adjacent_bomb_count
    count = 0

    neighbors.each do |neighbor|
      if neighbor.value == "b"
        count += 1
      end
    end
    
    count
  end

  def neighbors
    directions = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]]
    neighbors = []

    directions.each do |direction|
      neighbor = [@pos[0] + direction[0], @pos[1] + direction[1]]
      neighbors << @board[neighbor[0], neighbor[1]] unless out_of_bounds?(neighbor)
    end

    neighbors
  end

  def out_of_bounds?(pos)
    if pos[0] < 0 || pos[0] > @board.size - 1
      return true
    elsif pos[1] < 0 || pos[1] > @board.size - 1
      return true
    else
      return false
    end
  end

  def render
    if @value == "r" 
      adjacent_bomb_count == 0 ? "r" : @value = adjacent_bomb_count.to_s
    else
      @value
    end
  end
end