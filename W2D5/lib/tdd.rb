#Remove dups
#Array has a uniq method that removes duplicates from an array.
#It returns the unique elements in the order in which they first appeared

# [1, 2, 1, 3, 3].uniq ans: [1, 2, 3]
# Write your own version of this method called my_uniq
  # It should take in an Array and return a new array.
class TDD
  def my_uniq(arr)
    raise "#{arr} is not an array!" unless arr.is_a?(Array)

    new_arr = []

    arr.each do |ele|
      new_arr << ele unless new_arr.include?(ele)
    end

    new_arr
  end

  def two_sum(arr)
    raise "Input is not an array with 2 elements!" unless arr.length >= 2 && arr.is_a?(Array)

    new_arr = []

    arr.each_with_index do |ele, i|
      break if ele == arr[-1]      
      arr.each_with_index do |other_pair, j|
        next if i == j
        pair = i, j
        next if (ele + other_pair) != 0
        new_arr << pair unless new_arr.include?([i, j]) || new_arr.include?([j, i])
      end
    end

    new_arr
  end

  def my_transpose(arr)

    arr.size.times do |i|
      0.upto(i) do |j|
        arr[i][j], arr[j][i] = arr[j][i], arr[i][j]
      end
    end

    arr
  end

  def stock_picker(arr)
    raise "That is not an array yo." unless arr.is_a?(Array)
    best_buy = 0
    best_sell = 1
    profit = arr[best_sell] - arr[best_buy]

    arr.each_with_index do |buy, i|
      arr.each_with_index do |sell, j|
        next if i >= j
        if sell - buy > profit
          best_buy = i
          best_sell = j
          profit = arr[best_sell] - arr[best_buy]
        end
      end
    end
    return best_buy, best_sell
  end

  def tower_of_hanoi
    array = [[1, 2, 3], [], []]
    until won?(array)
      puts "Choose from pile with disks. The first number in the stack is the one on top."
      move(array)
      print array
    end

    puts "Nice"
    
    nil
  end

  def won?(array)
    array[0].empty? && array[1].empty? && array[2] == array[2].sort
  end

  def move(array)
    grab_pile, end_pile = nil, nil

    until grab_pile && end_pile
      puts "Grab from which pile? (Left is 0, middle is 1, right is 2)"
      grab_pile = gets.chomp.to_i
      puts "Place into which pile?"
      end_pile = gets.chomp.to_i
    end

    tile = array[grab_pile].shift

    array[end_pile].unshift(tile)
    
    nil
  end
end

tdd = TDD.new

tdd.tower_of_hanoi