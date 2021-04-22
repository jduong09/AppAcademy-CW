module Stepable

  def moves
    moves = []
    
    move_diffs.each do |dx, dy|
      new_pos = [pos[0] + dx, pos[1] + dy]

      next if !board.valid_pos?(new_pos)

      if board.empty?(new_pos)
        moves << new_pos
      elsif board[new_pos].color != color
        moves << new_pos
      end
    end
    moves
  end
  
end