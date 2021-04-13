require_relative "board"

class Game
  def initialize
    @board = Board.new
    @board.create_bombs
  end

  def take_turn
    pos = get_pos
    @board.check_position(pos)
    @board.render
  end

  def get_pos
    pos = nil
    until pos && valid_pos(pos)
      #prompt user for a location
      puts "Choose a location to reveal ex: '3, 4'."
      puts ">"

      begin
        pos = parse_pos(gets.chomp)
      rescue
        puts "Invalid location, did you use a comma?"
        puts ""
        pos = nil
      end
    end
    pos
  end

  def parse_pos(string)
    string.split(",").map { |char| Integer(char) }
  end

  def valid_pos(pos)
    pos.is_a?(Array) &&
      pos.length == 2 &&
      pos.all?{ |x| x.between?(0, @board.size - 1) }
  end

  def play_game
    @board.render
    take_turn
  end

  def run
    play_game until game_over?
    ending_message
  end
end