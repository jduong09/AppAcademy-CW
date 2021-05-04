#Sluggish Octopus
#Find the longest fish in O(n^2) time. Do this by comparing all fish lengths to all other fish lengths
def sluggish_find(arr)
  longest_length = nil
  arr.each do |fish|
    arr.each do |other_fish|
      if fish.length >= other_fish.length
        longest_length = other_fish
      end
    end
  end
  longest_length
end

#Find the longest fish in O(n log n) time. 
#Hint: You saw a sorting algorithm that runs in O(n log n) in the Sorting Complexity Demo. 
#Remember that Big O is classified by the dominant term.

def dominant_find(arr)
  sorted = merge_sort(arr)
  return sorted[0]
end

def merge_sort(arr)
  return [] if arr.length == 0
  return arr if arr.length == 1

  mid = arr.length / 2

  leftside = merge_sort(arr[0...mid])
  rightside = merge_sort(arr[mid..-1])

  array = merge(leftside, rightside)

  return array
end

def merge(array_one, array_two)
  new_array = []

  while !array_one.empty? && !array_two.empty?
    if array_one.first.length <= array_two.length
      new_array << array_one.first
      array_one = array_one[1..-1]
    else 
      new_array << array_two.first
      array_two = array_two[1..-1]
    end
  end
  
  while !array_one.empty?
     new_array << array_one.first
     array_one = array_one[1..-1]
  end

  while !array_two.empty?
    new_array << array_two.first
    array_two = array_two[1..-1]
  end

  return new_array
end

def clever_find(arr)
  longest_fish = arr[0]
  arr.each do |fish|
    if fish.length >= longest_fish.length
      longest_fish = fish
    end
  end

  longest_fish
end

octupus_array = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
#p sluggish_find(octupus_array) # "fiiiissshhhhhh"
#p dominant_find(octupus_array) # "fiiiissshhhhhh"
#p clever_find(octupus_array) # "fiiiissshhhhhh"

#Dancing Octopus!

def slow_dance(direction, tiles_array)
  tiles_array.each_with_index do |tile, i|
    if tile == direction
      return i
    end
  end
end

def fast_dance(direction, new_tiles_data_structure)
  new_tiles_data_structure[direction]
end

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]
new_tiles_data_structure = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7
}
#p slow_dance("up", tiles_array) # 0
#p slow_dance("right-down", tiles_array) #3
p fast_dance("up", new_tiles_data_structure) #0
p fast_dance("right-down", new_tiles_data_structure) #3
