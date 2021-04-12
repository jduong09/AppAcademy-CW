# Tile
class Tile
  attr_reader :is_bomb
  def initialize
    @is_bomb = false
  end

  def become_bomb
    @is_bomb = true
  end

  def to_s
    if @is_bomb
      "B"
    else
      " "
    end
  end
end