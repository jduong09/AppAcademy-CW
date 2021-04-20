require_relative "pieces"

#Sliding pieces (bishop, rook, queen)
#stepping pieces (knight, king)
#null pieces (empty space)
#pawns

class Board
  attr_reader :rows
  def initialize
    @rows = Array.new(8) { Array.new(8) { NullPiece.instance } }

    #need to fill up the top side with black pieces

    #fill up the middle empty space
    (2..5).each do |row|
      (0...8).each do |col|
        add_piece(nil, [row, col])
      end
    end

    #need to fill up the bottom side with white pieces


  end

  def move_piece(start_pos, end_pos)
    raise "There is no piece at #{start_pos}." if self[start_pos] == nil
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

end