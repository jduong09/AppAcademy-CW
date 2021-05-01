require_relative "card"
require_relative "game"

class Hand
  #Royal/Straight Flush
    # Straight (5 descending numbers) Flush (5 of the same suit)

  #4 of a kind
    # 4 of the same rank
  
  #Full House
    # 3 of the same rank, and 2 of the same rank

  #Flush 
    # 5 of the same suit

  #Straight
    # 5 descending

  #Three of a kind
    # 3 of the same rank

  #Two pair
    # 2 separate pairs

  #One pair
    # 2 of the same rank

  #High card
    # basically nothing, judge hand based on highest card of the 5

  #how to handle hand logic
  def hand_values(hand)
    values = hand.map { |card| card.value }
  end
  
end