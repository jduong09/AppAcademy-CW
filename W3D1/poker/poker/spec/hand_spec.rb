require_relative "../lib/hand"
require_relative "../lib/card"
#Logic of which hand beats which would go here.

describe Hand do
  let(:card_1) { Card.new("spade", "J", 10) }
  let(:card_2) { Card.new("club", "J", 10) }
  let(:card_3) { Card.new("heart", "J", 10) }
  let(:card_4) { Card.new("diamond", "J", 10) }
  let(:card_5) { Card.new("spade", "A", 13) }
  subject(:hand) { Hand.new([card_1, card_2, card_3, card_4, card_5]) }

  describe "#initialize" do
    it "takes in an array of cards" do
      expect(hand.hand).to eq([card_1, card_2, card_3, card_4, card_5])
    end

    it "takes in an array of 5 cards" do
      expect(hand.hand.length).to eq(5)
    end
  end

  describe "#royal_flush?" do
    it "returns false if there are only 5 descending ranks" do
      hand.hand = [Card.new("spade", "7", 6), Card.new("spade", "8", 7), Card.new("spade", "3", 2), Card.new("spade", "2", 1), Card.new("spade", "K", 12)]
      expect(hand.royal_flush?).to be(false)
    end

    it "returns false if they are the same rank" do
      hand.hand = [Card.new("spade", "7", 6), Card.new("spade", "8", 7), Card.new("spade", "3", 2), Card.new("spade", "2", 1), Card.new("spade", "K", 12)]
      expect(hand.royal_flush?).to be(false)
    end

    it "returns true if they are the same rank and 5 descending ranks" do
      hand.hand = [Card.new("spade", "7", 6), Card.new("spade", "6", 5), Card.new("spade", "5", 4), Card.new("spade", "4", 3), Card.new("spade", "3", 2)]
      expect(hand.royal_flush?).to be(true)
    end
  end

  describe "#four_of_a_kind" do
    it "returns true if 4 of the 5 cards are the same rank" do 
      expect(hand.four_of_a_kind?).to be(true)
    end

    it "returns false if 3 of the 5 cards are the same rank" do 
      hand.hand = [Card.new("spade", "K", 12), Card.new("club", "J", 10), Card.new("heart", "J", 10), Card.new("diamond", "J", 10), Card.new("spade", "A", 13)]
      expect(hand.four_of_a_kind?).to be(false)
    end
  end

  describe "#full_house?" do
    it "returns true if there is a three of a kind and one pair in the hand" do 
      hand.hand = [Card.new("spade", "K", 12), Card.new("club", "J", 10), Card.new("heart", "J", 10), Card.new("diamond", "J", 10), Card.new("club", "K", 12)]
      expect(hand.full_house?).to be(true)
    end

    it "returns false if there is only a three of a kind" do 
      hand.hand = [Card.new("spade", "K", 12), Card.new("club", "J", 10), Card.new("heart", "J", 10), Card.new("diamond", "J", 10), Card.new("spade", "A", 13)]
      expect(hand.full_house?).to be(false)
    end

    it "returns false if there is only one pair" do 
      hand.hand = [Card.new("spade", "K", 12), Card.new("club", "J", 10), Card.new("heart", "J", 10), Card.new("diamond", "Q", 11), Card.new("spade", "A", 13)]
      expect(hand.full_house?).to be(false)
    end
  end

  describe "#flush?" do
    it "returns true if the 5 cards are the same suit" do
      hand.hand = [Card.new("spade", "7", 6), Card.new("spade", "8", 7), Card.new("spade", "3", 2), Card.new("spade", "2", 1), Card.new("spade", "K", 12)]
      expect(hand.flush?).to be(true)
    end

    it "returns false if the 5 cards are not the same suit" do
      hand.hand = [Card.new("diamond", "7", 6), Card.new("spade", "8", 7), Card.new("spade", "3", 2), Card.new("spade", "2", 1), Card.new("spade", "K", 12)]
      expect(hand.flush?).to be(false)
    end
  end

  describe "#straight?" do
    it "returns true if there are 5 descending rank" do
      hand.hand = [Card.new("diamond", "7", 6), Card.new("spade", "6", 5), Card.new("spade", "5", 4), Card.new("spade", "4", 3), Card.new("spade", "3", 2)]
      expect(hand.straight?).to be(true)
    end

    it "returns false if there are not 5 descending ranks" do
      hand.hand = [Card.new("spade", "7", 6), Card.new("spade", "8", 7), Card.new("spade", "5", 4), Card.new("spade", "4", 3), Card.new("spade", "3", 2)]
      expect(hand.straight?).to be(false)
    end
  end

  describe "#three_of_a_kind?" do
    it "returns true if there are 3 cards of the same rank" do
      hand.hand = [Card.new("spade", "K", 12), Card.new("club", "J", 10), Card.new("heart", "J", 10), Card.new("diamond", "J", 10), Card.new("spade", "A", 13)]
      expect(hand.three_of_a_kind?).to be(true)
    end

    it "returns false if there are not 3 cards of the same rank" do
      expect(hand.three_of_a_kind?).to be(false)
    end
  end

  describe "#two_pairs?" do 
    it "returns true if there are two pairs of cards in the hand" do 
      hand.hand = [Card.new("spade", "K", 12), Card.new("club", "K", 12), Card.new("heart", "J", 10), Card.new("diamond", "J", 10), Card.new("spade", "A", 13)]
      expect(hand.two_pairs?).to be(true)
    end

    it "returns false if there is only one pair of cards in the hand" do 
      hand.hand = [Card.new("spade", "K", 12), Card.new("club", "K", 12), Card.new("heart", "Q", 11), Card.new("diamond", "J", 10), Card.new("spade", "A", 13)]
      expect(hand.two_pairs?).to be(false)
    end
  end

  describe "#one_pair?" do 
    it "returns true if the hand has only one pair" do 
      hand.hand = [Card.new("spade", "K", 12), Card.new("club", "K", 12), Card.new("heart", "Q", 11), Card.new("diamond", "J", 10), Card.new("spade", "A", 13)]
      expect(hand.one_pair?).to be(true)
    end

    it "returns false if the hand has two pairs" do 
      hand.hand = [Card.new("spade", "K", 12), Card.new("club", "K", 12), Card.new("heart", "J", 10), Card.new("diamond", "J", 10), Card.new("spade", "A", 13)]
      expect(hand.one_pair?).to be(false)
    end
  end
end