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
end