require_relative "board"
# Tile
 # reveal the value of the position
      # if not a bomb, then put r (done)
      # if bomb, then put B (done)
      # if an adjacent tile is blank and all adjacent's of it are blanks, then reveal it as "r"
      # if an adjacent tile is blank and it has adjacent tiles that are bombs, then place a number with how many bombs are bordering it.
class Tile
  attr_reader :flagged, :bomb, :explored
  def initialize(board, pos)
    @board = board
    @pos = pos
    @explored = false
    @bomb = false
    @flagged = false
  end

  def become_bomb
    @bomb = true
  end

  def flag
    @flagged = true
  end

  def explore
    return self if @flagged

    return self if @explored == true

    @explored = true
    
    return self if neighbors.empty?

    if !@bomb && adjacent_bomb_count == 0
      neighbors.each do |neighbor|
        neighbor.explore
        neighbor.render
      end
    end

    self
  end

  def adjacent_bomb_count
    count = 0

    neighbors.each do |neighbor|
      if neighbor.bomb
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
    if @flagged
      "F"
    elsif @explored
      adjacent_bomb_count == 0 ? "r" : adjacent_bomb_count.to_s
    else
      "*"
    end
  end

  def reveal
    # used to fully reveal the board at game end
    if @flagged
      # mark true and false flags
      @bomb ? "F" : "f"
    elsif @bomb
      # display a hit bomb as an X
      @explored ? "X" : "B"
    else
      adjacent_bomb_count == 0 ? "r" : adjacent_bomb_count.to_s
    end
  end

end