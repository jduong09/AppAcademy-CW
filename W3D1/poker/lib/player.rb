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
      bet
    when "f"
      fold
      "f"
    when "r"
      raise_bet
    else
      "You told me #{choice}. That was not one of the options."
    end
  end

  def fold
    @fold = true
  end

  def bet(num)
    raise "Cannot make that bet" if num > money
    @money - num
  end

  def raise_bet
    puts "How much would you like to raise?"
    bet = nil
    until bet  
      bet = gets.chomp.to_i

      bet = nil if bet > money
    end
    bet
  end
end