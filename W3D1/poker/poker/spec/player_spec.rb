require_relative "../lib/player"
#Each player has a hand, plus a pot
#Player has methods to ask the user:
  #Which cards they wish to discard
  #Whether they wish to fold, see, or raise.

describe Player do
  subject(:player) { Player.new(100) }
  describe "#initialize" do
    it "takes a buy_in" do
      expect(player.money).to eq(100)
    end

    it "sets player's hand to an empty array" do
      expect(player.hand).to be_empty
    end
  end

  describe "#bet" do
    it "raises error if bet is more than available money" do
      expect { player.bet(1000) }.to raise_error("Cannot make that bet")
    end
    
    it "takes in a bet and removes from player's money" do
      player.bet(100)
      expect(player.money).to eq(0)
    end
  end
end