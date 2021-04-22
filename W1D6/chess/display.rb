require 'colorize'
require_relative "cursor"

class Display
  attr_reader :board, :cursor, :notifications
  def initialize(board)
    @board = board
    @cursor = Cursor.new([0, 0], board)
    @notifications = {}
  end

  def render
    puts "   #{["a", "b", "c", "d", "e", "f", "g", "h"].join("  ")}"
    string = ""
    board.rows.each_with_index do |row, i|
      row_string = "#{8 - i} "
      row.each_with_index do |col, j|
        color_options = colors_for(i, j)
        row_string += col.to_s.colorize(color_options)
      end
      string += row_string + "\n"
    end

    puts string
    @notifications.each do |_key, val|
      puts val
    end
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
    { background: bg }
  end

  def reset!
    @notifications.delete(:error)
  end

  def uncheck!
    @notifications.delete(:check)
  end

  def set_check!
    @notifications[:check] = "Check!"
  end

end