require_relative "deck"
require_relative "card"

class Hand
  attr_accessor :hand
  
  def initialize(hand)
    @hand = hand
  end

  #Royal/Straight Flush
    # Straight (5 descending numbers) Flush (5 of the same suit)
  def royal_flush?
    if flush? && straight?
      return true
    else
      return false
    end
  end

  #4 of a kind
    # 4 of the same rank
  def four_of_a_kind?
    dupes.any? { |dupe| dupe == 4 }
  end
  
  #Full House
    # 3 of the same rank, and 2 of the same rank
  def full_house?
    if three_of_a_kind? && one_pair?
      return true
    else
      return false
    end
  end

  #Flush 
    # 5 of the same suit
  def flush?
    first_card_suit = hand[0].suit
    hand.all? { |card| card.suit == first_card_suit }
  end

  #Straight
    # 5 descending
  def straight?
    values = hand_values
    sorted = values.sort

    (0...sorted.length - 1).each do |i|
      return false if sorted[i + 1] != sorted[i] + 1
    end
    return true
  end

  #Three of a kind
    # 3 of the same rank
  def three_of_a_kind?
    dupes.any? { |dupe| dupe == 3 }

  end

  #Two pair
    # 2 separate pairs
  def two_pairs?
    num_of_two_pairs = dupes.count { |dupe| dupe == 2 }

    if num_of_two_pairs == 4
      return true
    else
      return false
    end
  end

  #One pair
    # 2 of the same rank
  def one_pair?
    num_of_two_pairs = dupes.count { |dupe| dupe == 2 }

    if num_of_two_pairs == 2
      return true
    else
      return false
    end
  end

  #High card
    # basically nothing, judge hand based on highest card of the 5

  #how to handle hand logic
  def hand_values
    values = hand.map { |card| card.value }
  end

  def dupes
    values = hand_values
    num_of_dupes = []

    values.each do |value|
      count = values.count { |x| value == x }
      num_of_dupes << count
    end

    num_of_dupes
  end
  
end