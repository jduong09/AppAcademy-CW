require_relative "../lib/card"

describe "Card" do
  subject(:card) { Card.new("spade", "J") }
  describe "#initialize" do
    it "takes in a suit variable" do
      expect(card.suit).to eq("spade") 
    end

    it "takes in a rank variable" do
      expect(card.rank).to eq("J")
    end
  end
end