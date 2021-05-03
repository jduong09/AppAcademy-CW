require_relative "../lib/card"

describe "Card" do
  subject(:card) { Card.new("spade", "J", 10) }
  describe "#initialize" do
    it "takes in a suit variable" do
      expect(card.suit).to eq("spade") 
    end

    it "takes in a rank variable" do
      expect(card.rank).to eq("J")
    end

    it "takes in a value variable" do
      expect(card.value).to eq(10)
    end
  end
end