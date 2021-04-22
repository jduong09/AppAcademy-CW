require_relative "stepable_module"
require_relative "piece"

class Knight < Piece
  include Stepable

  def symbol
    '♞'.colorize(color)
  end

  protected

  def move_diffs
    [[2,1], [-2, 1], [2, -1], [-2, -1], [1, 2], [-1, -2], [1, -2], [-1, 2]]
  end
end
