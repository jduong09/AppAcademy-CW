require_relative "piece"

class Pawn < Piece

  def symbol
    '♟'.colorize(color)
  end
  
  def moves
    moves = []

    moves.concat(side_attacks)
    
    forward_steps.each do |move|
      next if !board.valid_pos?(move)

      next if !board[move].empty?

      moves << move
    end

    moves
  end

  private

  def at_start_row?
    if color == :white
      return true if pos[0] == 6
    elsif color == :black
      return true if pos[0] == 1
    end
    false
  end

  def forward_dir
    return -1 if color == :white
    return 1 if color == :black
  end

  def forward_steps
    pawn_dir = forward_dir
    x, y = pos
    if at_start_row?
      [[x + pawn_dir, y], [x + (2 * pawn_dir), y]]
    else
      [[x + pawn_dir, y]]
    end
  end

  def side_attacks
    moves = []

    opposite_color = color == :white ? :black : :white

    x, y = pos

    left_side = [x + forward_dir, y - 1] 
    right_side = [x + forward_dir, y + 1]
    
    if board.valid_pos?(left_side)
      moves << left_side if board[left_side].color == opposite_color
    end

    if board.valid_pos?(right_side)
      moves << right_side if board[right_side].color == opposite_color
    end

    moves
  end
end