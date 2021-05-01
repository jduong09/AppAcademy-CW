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
    betting_phase # ask each player how much they wish to bet (done)
    first_discard_phase # ask each player if they want to discard cards. Distribute cards so they have 5 cards. (done)
    betting_phase # ask each player how much they wish to bet (done)
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
    call = 0
    @players.each_with_index do |player, i|
      puts "Player #{i + 1}"
      # need to raise error if bet is less than the most recent bet
      choice = player.turn

      if choice == "call"
        player.bet(call)
        add_to_pot(call)
      elsif choice == "raise"
        bet = player.raise_bet
        raise "That is not a raise" if bet <= call
        call = bet
        add_to_pot(bet)
      elsif choice == "f"
        next
      end
    end
  end

  def first_discard_phase
    @players.each { |player| player.discard? }

    @players.each do |player|
      until player.hand.length == 5
        player.hand << @deck.draw_card
      end
    end
  end

  def add_to_pot(bet)
    @pot += bet
  end

end