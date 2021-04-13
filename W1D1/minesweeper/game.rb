require_relative "board"

class Game
  def initialize
    @board = Board.new
    @board.create_bombs
  end

  def take_turn
    flag? until flag? == false
    pos = get_pos
    @board.reveal_position(pos)
  end

  def flag?
    system("clear")
    @board.render
    puts "Do you wish to flag a location? (y/n)"
    input = gets.chomp 
    if input == "y"
      pos = get_pos
      @board.flag_position(pos)
    elsif input == "n"
      return false
    else #catch if someone puts something other then the two choices
      return false
    end
  end

  def get_pos
    pos = nil
    until pos && valid_pos(pos)
      #prompt user for a location
      puts "Choose a location. ex: '3, 4'."
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
    if @board.position_is_flag?(pos)
      puts "Cannot choose flagged location."
      return false 
    end
    
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