# How to play minesweeper
  # Player chooses a location that they think does not have a bomb on it
    # if spot has a bomb, they lose
    # if spot is not a bomb, then that spot is revealed and any adjacent spots are revealed as well.
      # if the spot adjacent to the spot they chose has adjacent spots that are not bombs, those will be revealed as well.
        # if the adjacent spot has been revealed and it has a bomb next to it, it will have a number at the spot 
          # so the user knows that there is a bomb touching that spot.

# How to setup minesweeper
  # Board class has a grid that will randomly place bombs in spots
    # Grid is a 2D Array (Array of Arrays) where each spot on the array is a tile. (done)
    # Tiles will be a separate class that will hold information for the board to work.
      # Tile will have whether it is a bomb or not.
        # Does tile need to know about its adjacent tiles?
  # Randomly put bombs in spots. (done)
    # Beginner has 10 mines and the board is 8x8, 9x9, 10x10
    # Intermediate has 40 mines and the board is between 13x15 and 16x16
    # Hard has 99 mines and the board is always 16x30 (30x16)
  # When player makes a move, what do we want the board class to do?
    # reveal the value of the position
      # if not a bomb, then put r
      # if bomb, then put B

require_relative "tile"

class Board
  attr_reader :grid
  def initialize
    @grid = Array.new(9) { Array.new(9) { Tile.new } }
  end

  def render
    puts "  #{(0..8).to_a.join(" ")}"
    string = ""
    @grid.each_with_index do |row, i|
      row_string = "#{i} "
      row.each do |col|
        row_string += col.value + " " 
      end
      string += row_string + "\n"
    end
    puts string
  end

  def create_bombs
    chosen_coordinates = []

    until chosen_coordinates.length == 10
      x = (0..8).to_a.sample()
      y = (0..8).to_a.sample()
      next if chosen_coordinates.include?([x,y])

      self[x,y].become_bomb
      chosen_coordinates << [x,y]
    end
  end

  def [](x, y)
    @grid[x][y]
  end

  def check_position(position)
    tile = self[position[0], position[1]]
    tile.reveal
  end

end