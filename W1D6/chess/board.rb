require_relative "pieces"

class Board
  attr_reader :rows
  def initialize
    @sentinel = NullPiece.instance
    @rows = Array.new(8) { Array.new(8) { @sentinel } }

    create_starting_grid
  end

  def move_piece(start_pos, end_pos)
    raise "There is no piece at #{start_pos}." if self[start_pos] == @sentinel
    piece = self[start_pos]
    raise "This piece cannot travel to #{end_pos}." if !piece.valid_moves.include?(end_pos)
    self[end_pos] = piece
    piece.pos = end_pos
  end

  def add_piece(piece, pos)
    self[pos] = piece
  end

  def empty?(pos)
    self[pos].empty?
  end

  def [](pos)
    x, y = pos
    @rows[x][y]
  end

  def []=(pos, value)
    x, y = pos
    @rows[x][y] = value
  end

  def valid_pos?(pos)
    return false if pos.any? { |num| num < 0 || num > 7 }
    return true
  end

  def create_starting_grid
    colors = [:white, :black]

    colors.each do |color|
      place_back_row(color)
      place_pawn_row(color)
    end
  end

  def place_back_row(color)
    row = color == :white ? 7 : 0
    back_row = [Rook, Bishop, Knight, Queen, King, Knight, Bishop, Rook]

    back_row.each_with_index do |piece, i|
      piece.new(color, self, [row, i])
    end
  end

  def place_pawn_row(color)
    row = color == :white ? 6 : 1

    (8).times do |num|
      Pawn.new(color, self, [row, num])
    end
  end

end