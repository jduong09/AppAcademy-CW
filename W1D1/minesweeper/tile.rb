# Tile
class Tile
  attr_reader :value
  def initialize
    @value = " "
    @is_bomb = false
  end

  def become_bomb
    @is_bomb = true
  end

  def reveal
    if @is_bomb
      @value = "b"
    else
      @value = "r"
    end
  end

  def flag
    @value = "f"
  end
end