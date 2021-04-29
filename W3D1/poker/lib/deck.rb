require_relative "card"

class Deck
  RANKS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  SUITS = ["♠", "♥", "♦", "♣"]
  attr_reader :deck

  def initialize
    @deck = []
    create_deck
  end

  def shuffle!
    @deck.shuffle!
  end

  def draw_card
    @deck.pop
  end

  private
  
  def create_deck
    SUITS.each do |suit|
      RANKS.each do |rank|
        @deck << Card.new(suit, rank)
      end
    end
  end

end