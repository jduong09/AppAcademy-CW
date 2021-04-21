require 'colorize'
require_relative "cursor"

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
      row.each_with_index do |col, j|
        color_options = colors_for(i, j)
        row_string += col.to_s.colorize(color_options)
      end
      string += row_string + "\n"
    end
    puts string
  end

  def colors_for(row, col)
    if [row, col] == @cursor.cursor_pos
      bg = :light_red
      if @cursor.selected
        bg = :yellow
      end
    elsif (row + col).odd?
      bg = :light_blue
    else
      bg = :blue
    end
    { background: bg, color: :white }
  end

  def move_cursor
   loop do 
    render
    @cursor.get_input
   end
  end
end