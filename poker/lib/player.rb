class Player
  attr_reader :money, :hand
  
  def initialize(buy_in)
    @money = buy_in
    @hand = []
  end
  
  def turn
    @fold = false
    puts "(c)all, (f)old or (r)aise?"
    choice = gets.chomp

    case choice
    when "c"
      "call"
    when "f"
      fold
      "f"
    when "r"
      "raise"
    else
      "You told me #{choice}. That was not one of the options."
    end
  end

  def fold
    @fold = true
  end

  def bet(num)
    raise "Cannot make that bet" if num > money
    @money -= num
  end

  def raise_bet
    puts "How much would you like to raise?"
    num = nil
    until num  
      num = gets.chomp.to_i

      num = nil if num > money
    end
    bet(num)

    num
  end

  def discard?
    puts "Would you like to discard any cards?"
    puts "Choose the cards to discard by typing the card index, separated by spaces (ex: 0, 1, 3)"
    puts "Index 0 - 5"

    index = gets.chomp.split(",").map { |char| char.to_i }

    new_hand = []
    
    @hand.each_with_index do |card, i|
      next if index.include?(i)

      new_hand << card
    end

    @hand = new_hand
  end
end