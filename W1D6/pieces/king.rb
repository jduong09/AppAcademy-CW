require_relative "stepable_module"
require_relative "piece"
class King < Piece
  include Stepable
  attr_reader :color

  def initialize(color, board, pos)
    super(color, board, pos)
  end

  def symbol
    :k
  end

  protected

  def move_diffs
    [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [-1, 1], [1, -1]]
  end
end
