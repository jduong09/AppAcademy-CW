# How to play minesweeper
  # Player chooses a location that they think does not have a bomb on it
    # if spot has a bomb, they lose
    # if spot is not a bomb, then that spot is revealed and any adjacent spots are revealed as well.
      # if the spot adjacent to the spot they chose has adjacent spots that are not bombs, those will be revealed as well.
        # if the adjacent spot has been revealed and it has a bomb next to it, it will have a number at the spot 
          # so the user knows that there is a bomb touching that spot.

# How to setup minesweeper
  # Board class has a grid that will randomly place bombs in spots
    # Grid is a 2D Array (Array of Arrays) where each spot on the array is a tile.
    # Tiles will be a separate class that will hold information for the board to work.
      # Tile will have whether it is a bomb or not.
        # Does tile need to know about its adjacent tiles?
class Board
  def initialize

  end
end