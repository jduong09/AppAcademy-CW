require_relative "../lib/game"
#Each player is dealt five cards.
#Players bet; each player may fold, see the current bet, or raise.
#In turn, each player can choose to discard up to three cards.
#They are dealt new cards from the deck to replace their old cards.
#Players bet again.
#If any players do not fold, then players reveal their hands; strongest hand wins the pot.

#Holds the deck
#Keeps track of whose turn it is
#Keeps track of the amount in the pot.
describe Game do
  subject(:game) { Game.new }
  let(:player_1) { double('player') }
  let(:player_2) { double('player') }
  let(:player_3) { double('player') }
  let(:player_4) { double('player') }
  
  describe "#initialize" do
    it "sets table variable to a hash" do
      expect(game.players).to eq([])
    end

    it "creates a deck of cards" do
      expect(game.deck).to be_a(Deck)
      expect(game.deck.deck.length).to eq(52)
    end

    it "sets the pot to 0" do
      expect(game.pot).to be_zero
    end

    it "sets a discard pile to an array" do 
      expect(game.discard).to be_empty
    end
  end

  #when one person has all the money or when there is one person at the table
  describe "#game_over?" do

    it "when there is only one person with money it returns true" do
      game.create_players(1, 1000)
      game.create_players(3, 0)
      expect(game.game_over?).to be(true)
    end

    it "when there is more than one person it returns false" do
      game.create_players(4, 1000)
      expect(game.game_over?).to be(false)
    end
  end

  describe "#first_hand" do

    it "distributes 20 cards to the four players" do
      game.create_players(4, 1000)
      expect(game.deck.deck.length).to eq(52)
      game.first_hand
      expect(game.deck.deck.length).to eq(32)
    end

    it "places five cards in each player's hands" do
      game.create_players(4, 1000)
      expect(game.players[0].hand).to be_empty
      game.first_hand
      expect(game.players[0].hand).not_to be_empty
    end

    it 'should not give a player a hand if the player has no money' do
      game.create_players(1, 0)
      game.first_hand
      expect(game.players[0].hand).to eq([])
    end
  end

  describe '#add_to_pot' do
    it 'should add the specified amount to the pot' do
      expect { game.add_to_pot(100) }.to change { game.pot }.by(100)
    end

    it 'should return the amount added' do
      expect(game.add_to_pot(100)).to eq(100)
    end
  end
  
end