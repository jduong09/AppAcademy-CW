require_relative "slideable_module"
require_relative "piece"

class Bishop < Piece
  include Slideable

  def symbol
    "♝".colorize(color)
  end

  protected

  def move_dirs #moves diagonally in each diagonal direction
    diagonal_dirs
  end
end
