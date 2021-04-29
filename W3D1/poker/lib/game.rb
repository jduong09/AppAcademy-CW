require_relative "deck"
require_relative "player"

class Game
  attr_reader :players, :deck, :pot, :discard

  def initialize
    #dealer will be @players[0]
    #rotate @players every round 
    @players = []
    @deck = Deck.new
    @pot = 0
    @discard = []
  end

  def play_game
    play_round until game_over?
    final_message
  end

  def create_players(n, buy_in)
    n.times do |num|
      @players << Player.new(buy_in)
    end
  end

  def play_round
    first_hand # done
    betting_phase # ask each player how much they wish to bet
    after_the_draw_phase # ask each player if they want to discard cards. Distribute cards so they have 5 cards.
    showdown_phase # whoever has not folded duke out to whoever has the best hand
    round_end # declare winner of showdown. Allocate money to winner, reset round.
  end

  def game_over?
    @players.count { |player| player.money > 0 } <= 1
  end

  def first_hand 
    @deck.shuffle!

    5.times do |turn|
      @players.each do |player|
        next if player.money <= 0
        player.hand << @deck.draw_card
      end
    end
  end

  def betting_phase 
    @players.each do |player|
      bet = player.turn
      add_to_pot(bet) unless bet == "f"
    end
  end

  def add_to_pot(bet)
    @pot += bet
  end

end