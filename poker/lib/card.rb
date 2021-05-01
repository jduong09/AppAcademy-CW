class Card
  attr_reader :suit, :rank, :value

  def initialize(suit, rank, value)
    @suit, @rank, @value = suit, rank, value
  end
end