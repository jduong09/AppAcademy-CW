require_relative "slideable_module"
require_relative "piece"

class Bishop < Piece
  include Slideable
  attr_reader :color

  def initialize(color, board, pos)
    super(color, board, pos)
  end

  def symbol
    :b
  end

  private

  def move_dirs #moves diagonally in each diagonal direction
    diagonal_dirs
  end
end
