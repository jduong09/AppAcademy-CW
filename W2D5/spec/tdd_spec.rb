require "rspec"
require_relative "../lib/tdd"

describe TDD do
  subject(:tdd) { TDD.new }
  let(:array) { [1, 2, 3, 2, 1] }

  describe "#my_uniq" do
    it "raises error if not passed an array as an argument" do
      expect { tdd.my_uniq("hello") }.to raise_error("hello is not an array!")
    end

    it "returns an array of uniq elements" do
      expect(tdd.my_uniq(array)).to eq([1, 2, 3])
    end

    it "return a new array" do 
      expect(tdd.my_uniq(array)).not_to be([1, 2, 3])
    end
  end

  #Write a new Array#two_sum method that finds all pairs of positions 
  #where the elements at those positions sum to zero.

  #NB: ordering matters. We want each of the pairs to be sorted smaller index before bigger index. 
  #We want the array of pairs to be sorted "dictionary-wise":

  #[-1, 0, 2, -2, 1].two_sum # => [[0, 4], [2, 3]]
  describe "#two_sum" do
    it "raises an error if not given an array with more than 2 elements" do
      expect { tdd.two_sum([]) }.to raise_error("Input is not an array with 2 elements!")
    end

    it "returns pairs of positions who sum to zero" do
      expect(tdd.two_sum([-1, 0, 2, -2, 1])). to eq([[0, 4], [2, 3]])
    end

    it "returns pair of positions sorted smaller index before bigger index" do
      expect(tdd.two_sum([-1, 0, 2, -2, 1])).not_to eq([[2, 3], [0, 4]])
    end

    it "returns an empty array if there are no pairs" do
      expect(tdd.two_sum([-1, 0, -1, 2, 3])).to eq([])
    end
  end

  #my_transpose([
  # [0, 1, 2],
  # [3, 4, 5],
  # [6, 7, 8]
  #])

  # [[0, 3, 6],
  # [1, 4, 7],
  # [2, 5, 8]]
  describe "#my_transpose" do
    it "converts between the row orientation to a column orientation" do
      expect(tdd.my_transpose([[0, 1, 2], [3, 4, 5], [6, 7, 8]])).to eq([[0, 3, 6], [1, 4, 7], [2, 5, 8]])
    end
  end

  #Write a method that takes an array of stock prices (prices on days 0, 1, ...), and 
  #Outputs the most profitable pair of days on which to first buy the stock and then sell the stock. 
  #Remember, you can't sell stock before you buy it!
  describe "#stock_picker" do
    it ""
  end
end