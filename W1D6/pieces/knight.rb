require_relative "stepable_module"
require_relative "piece"

class Knight < Piece
  include Stepable
  attr_reader :color

  def initialize(color, board, pos)
    super(color, board, pos)
  end

  def symbol
    :n
  end

  protected

  def move_diffs
    [[2,1], [-2, 1], [2, -1], [-2, -1], [1, 2], [-1, -2], [1, -2], [-1, 2]]
  end
end
