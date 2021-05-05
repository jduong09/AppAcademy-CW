#Be able to determine the time and space complexity of a method
#Be able to compare the time complexity of one method to another
#Be able to recognize when time or space complexity can be improved

#my_min
#Given a list of integers find the smallest number in the list.

#Phase I
#First, write a function that compares each element to every other element of the list. 
#Return the element if all other elements in the array are larger.
#What is the time complexity for this function?
#Quadractic O(n^2)
#def my_min(arr)

  #arr.each do |i|
    #arr.each_with_index do |j, index|
      #break if i > j
      #if i < j and index == (arr.length - 1)
        #return i
      #end
    #end
  #end
#end

#Phase II
#Now rewrite the function to iterate through the list just once while keeping track of the minimum. 
#What is the time complexity?
#def my_min(arr)
  #minimum = arr[0]

  #arr.each do |element|
    #if element < minimum
      #minimum = element
    #end
  #end

  #minimum
#end

#list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
#p my_min(list)  # =>  -5

----------------------------------------------------------------------------------------------------------------
#Largest Continous Sub-sum

#You have an array of integers and you want to find the largest contiguous (together in sequence) sub-sum. 
#Find the sums of all contiguous sub-arrays and return the max.

#Example 1
#list = [5, 3, -7]
#largest_contiguous_subsum(list) # => 8

# possible sub-sums
#[5]           # => 5
#[5, 3]        # => 8 --> we want this one
#[5, 3, -7]    # => 1
#[3]           # => 3
#[3, -7]       # => -4
#[-7]          # => -7

#Example 2
#list = [2, 3, -6, 7, -6, 7]
#largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

#Example 3
#list = [-5, -1, -3]
#largest_contiguous_subsum(list) # => -1 (from [-1])

#Phase I
#Write a function that iterates through the array and finds all sub-arrays using nested loops. 
#First make an array to hold all sub-arrays. Then find the sums of each sub-array and return the max.

#Discuss the time complexity of this solution.

def largest_contiguous_subsum(arr)
  
end
