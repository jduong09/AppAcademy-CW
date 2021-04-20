require_relative "slideable_module"
require_relative "piece"

class Rook < Piece
  include Slideable

  def symbol
    '♜'.colorize(color)
  end

  private

  def move_dirs # moves vertical up and down, horizontal left and right
    horizontal_and_vertical_dirs
  end
end