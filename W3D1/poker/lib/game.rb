class Game
  attr_reader :players, :deck

  def initialize
    @players = []
    #create_players
    @deck = []
  end

  def create_players
    4.times do |num|
      puts "Player #{num + 1}, what is your name?"

      name = gets.chomp

      @players << Player.new(name)
    end
  end
end