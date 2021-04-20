require_relative "slideable_module"
require_relative "piece"

class Queen < Piece
  include Slideable
  attr_reader :color
  
  def initialize(color, board, pos)
    super(color, board, pos)
  end

  def symbol
    :q
  end

  private

  def move_dirs
    horizontal_dirs.concat(diagonal_dirs)
  end
end
