class Piece
  attr_reader :pos, :board, :color
  def initialize(color, board, pos)
    @color = color
    @board = board
    @pos = pos

    board.add_piece(self, pos)
  end

  def pos=(value)
    @pos = value
  end

  def to_s
    "#{symbol}"
  end

  def empty?
    false
  end

  def valid_moves
    #moves.reject { |end_pos| move_into_check?(end_pos) }  
  end

  private

  def move_into_check?(end_pos)
    test_board = board.dup
    test_board.move_piece!(pos, end_pos)
    test_board.in_check?(color)
  end
end

