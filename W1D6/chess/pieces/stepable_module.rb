module Stepable

  def moves
    moves = []
    
    move_diffs.each do |dx, dy|
      new_pos = [pos[0] + dx, pos[1] + dy]
      next if !board.valid_pos?(new_pos)
      moves << new_pos unless board[new_pos].color == color
    end

    moves
  end
  
end