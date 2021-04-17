class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @player_1 = name1
    @player_2 = name2
    @cups = Array.new(14) { Array.new { [] } }
    place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    (0...6).each { |cup_idx| @cups[cup_idx] = [:stone, :stone, :stone, :stone] }

    (7...13).each { |cup_idx| @cups[cup_idx] = [:stone, :stone, :stone, :stone] }
  end

  def valid_move?(start_pos)
    if start_pos < 0 || start_pos > 12
      raise "Invalid starting cup"
    elsif @cups[start_pos].empty?
      raise 'Starting cup is empty'
    end
    
    true
  end

  def make_move(start_pos, current_player_name)
    opposite_storage = current_player_name == @player_1 ? 13 : 6
    #Figure out how many stones are in the selected cup
    num_of_stones = @cups[start_pos].count
    #Empty the stones that are in the selected cup
    @cups[start_pos] = []
    #Distribute the stones from the selected cup
    until num_of_stones == 0
      if start_pos + 1 == opposite_storage
        if start_pos + 2 > 12
          start_pos = 0
        else
          start_pos = start_pos + 2 
        end
      else
        if start_pos + 1 > 13
          start_pos = 0
        else
          start_pos = start_pos + 1
        end
      end

      @cups[start_pos] << :stone

      num_of_stones -= 1
    end
    # At the end of the until loop, start pos, will be the last cup that gets a stone
    render

    next_turn_response = next_turn(start_pos)

    if current_player_name == @player_1 && start_pos == 6
      return :prompt
    elsif current_player_name == @player_2 && start_pos == 13
      return :prompt
    else
      return next_turn_response
    end
  
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if @cups[ending_cup_idx].count == 1
      return :switch
    else
      return ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    player_2_side = [12, 11, 10, 9, 8, 7].all? { |idx| @cups[idx].count == 0 }
    player_1_side = [0, 1, 2, 3, 4, 5].all? { |idx| @cups[idx].count == 0 }

    if player_1_side == true || player_2_side == true
      return true
    else
      return false
    end
  end

  def winner
    if @cups[6].count == @cups[13].count
      return :draw
    elsif @cups[6].count > @cups[13].count
      return @player_1
    else
      return @player_2
    end
  end
end
