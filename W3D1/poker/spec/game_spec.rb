require_relative "../lib/game"
#Each player is dealt five cards.
#Players bet; each player may fold, see the current bet, or raise.
#In turn, each player can choose to discard up to three cards.
#They are dealt new cards from the deck to replace their old cards.
#Players bet again.
#If any players do not fold, then players reveal their hands; strongest hand wins the pot.

describe Game do
  subject(:game) { Game.new }
  #let(:player_1) { Player.new("Justin") }
  #let(:player_2) { Player.new("Julian") }
  #let(:player_3) { Player.new("John") }
  #let(:player_4) { Player.new("Jack") }
  
  
  describe "#initialize" do
    #creates a hash with player name and money count
    it "sets 4 players to a hash" do
      expect(game.players.length).to eq(4)
    end


    it "creates a deck of cards" do
      expect(game.deck.length).to eq(52)
    end
  end

  describe "#game_over?" do

  end

  describe "#betting_phase" do

  end

  describe "#draw_phase" do

  end

  describe "#after_the_draw_phase" do

  end

  describe "#showdown" do

  end
end