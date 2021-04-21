require 'colorize'

class Display
  attr_reader :board
  def initialize(board)
    @board = board
    @cursor = Cursor.new([0, 0], board)
  end

  def render
    puts "  #{(1..8).to_a.join(" ")}"
    string = ""
    board.rows.each_with_index do |row, i|
      row_string = "#{i + 1} "
      row.each do |col|
        row_string += col.to_s + " "
      end
      string += row_string + "\n"
    end
    puts string
  end
end