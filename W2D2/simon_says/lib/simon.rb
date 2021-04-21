class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over
      take_turn
    end

    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence

    if @game_over == false
      round_success_message
      @sequence_length += 1
    end
  end

  def show_sequence
    add_random_color
    @seq.each do |color|
      puts "#{color}"
      sleep(2)
      system("clear")
    end
  end

  def require_sequence
    puts "Enter the color in the order Simon said."
    sleep(2)
    @seq.length.times do |num|
      system("clear")
      puts "#{num + 1}"
      puts ">"
      input = gets.chomp

      if input != @seq[num]
        @game_over = true
      end
    end
  end

  def add_random_color
    random_color = COLORS.sample
    @seq << random_color
  end

  def round_success_message
    puts "Nice Job! To the next round we go."
  end

  def game_over_message
    return "Game Over! You made it #{sequence_length} turns!"
  end

  def reset_game
    @sequence_length = 1
    @game_over = false
    @seq = []
  end
end
