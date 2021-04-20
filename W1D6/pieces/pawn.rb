require_relative "piece"

class Pawn < Piece
  attr_reader :color

  def initialize(color, board, pos)
    super(color, board, pos)
  end

  def symbol
    :p
  end
  
  def moves

  end

  private

  def at_start_row?
    if color == :white
      return true if pos[0] == 6
    elsif color == :black
      return true if pos[0] == 1
    end
    false
  end

  def forward_dir
    return -1 if color == :white
    return 1 if color == :black
  end

  def forward_steps

  end

  def side_attacks

  end
end