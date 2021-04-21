require_relative "pieces"
require 'colorize'

class Board
  attr_reader :rows
  def initialize(fill_board = true)
    @sentinel = NullPiece.instance
    @rows = Array.new(8) { Array.new(8, @sentinel) }

    create_starting_grid(fill_board)
  end

  def move_piece(color, start_pos, end_pos)
    raise "There is no piece at #{start_pos}." if self[start_pos] == @sentinel

    piece = self[start_pos]

    if piece.color != turn_color
      raise 'You must move your own piece'
    elsif !piece.moves.include?(end_pos)
      raise 'Piece does not move like that'
    elsif !piece.valid_moves.include?(end_pos)
      raise 'You cannot move into check'
    end

    move_piece!(start_pos, end_pos)
  end

  def move_piece!(start_pos, end_pos)
    piece = self[start_pos]
    raise 'piece cannot move like that' unless piece.moves.include?(end_pos)

    self[end_pos] = piece
    self[start_pos] = sentinel
    piece.pos = end_pos

    nil
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

  def create_starting_grid(fill_board)
    colors = [:white, :black]
    return unless fill_board
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

  def in_check?(color)
    opposite_color = color == :white ? :black : :white
    king = find_king(color)

    possible_moves = []

    @rows.each do |row|
      row.each do |piece|
        next if piece.color != color

        possible_moves.concat(piece.valid_moves)
      end
    end

    if possible_moves.include?(king.pos)
      return true
    else
      return false
    end
  end

  def checkmate?(color)
    return false unless in_check?(color)
    
    pieces.select { |p| p.color == color }.all? do |piece|
      piece.valid_moves.empty?
    end
  end

  def find_king(color)
    @rows.each do |row|
      row.each do |piece|
        next if piece.color != color

        return piece if piece.symbol == '♚'.colorize(color)
      end
    end
  end

  def dup
    new_board = Board.new(false)

    pieces.each do |piece|
      piece.class.new(piece.color, new_board, piece.pos)
    end

    new_board
  end

  def pieces
    @rows.flatten.reject(&:empty?)
  end
end