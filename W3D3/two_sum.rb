#two_sum?
#Given an array of unique integers and a target sum, 
#Determine whether any two integers in the array sum to that amount.

#def two_sum?(arr, target)

#end

arr = [0, 1, 5, 7]
#p two_sum?(arr, 6) # => should be true
#p two_sum?(arr, 10) # => should be false

#Time Complexity : O(n^2)
def brute_force_two_sum?(arr, target) 
  arr.each do |element|
    arr.each do |other_element|
      next if element == other_element
      return true if element + other_element == target
    end
  end
  return false
end

#p brute_force_two_sum?(arr, 6)
#p brute_force_two_sum?(arr, 10)

#BSearch 
#Time Complexity O(nlogn)
def okay_two_sum_b?(arr, target_sum)
  arr = arr.sort
  arr.each_with_index do |el, i|
    match_idx = arr.bsearch_index { |el2| (target_sum - el) <=> el2 }
    return true if match_idx && match_idx != i
  end
  false
end

p okay_two_sum_b?(arr, 6)
p okay_two_sum_b?(arr, 10)

#Use of Hash map, which has O(1) set and O(1) get

def two_sum?(arr, target_sum)
  complements = {}

  arr.each do |el|
    return true if complements[target_sum - el]
    complements[el] = true
  end

  false
end

p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false