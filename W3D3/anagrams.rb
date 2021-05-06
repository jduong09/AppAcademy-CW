#Write a method 
#first_anagram? that will generate and store all the possible anagrams of the first string. 
#Check if the second string is one of these.

def first_anagram?(str, anagram) # time_complexity : O(n!)
  array_of_char = str.split("")

  possible_anagrams = array_of_char.permutation.to_a #n!

  words = possible_anagrams.map { |word| word.join("") }
  
  words.include?(anagram)
end

#p first_anagram?("gizmo", "sally") false
#p first_anagram?("elvis", "lives") true

#Write a method #second_anagram? that iterates over the first string. 
#For each letter in the first string, 
#find the index of that letter in the second string 
#(hint: use Array#find_index) and delete at that index. 
#The two strings are anagrams if an index is found for every letter and the second string is empty at the end of the iteration.

#Try varying the length of the input strings. 
#What are the differences between #first_anagram? and #second_anagram??

def second_anagram?(str, anagram) #O(n^2)
  array_of_char = anagram.split("")
  str.each_char do |char|
    index = array_of_char.find_index(char)
    array_of_char = array_of_char.reject.with_index{|v, i| i == index }
  end

  array_of_char.empty?
end

#p second_anagram?("gizmo", "sally") #false
#p second_anagram?("elvis", "lives") #true

#Write a method 
#third_anagram? that solves the problem by sorting both strings alphabetically. 
#The strings are then anagrams if and only if the sorted versions are the identical.

#What is the time complexity of this solution? 
#Is it better or worse than #second_anagram??

def third_anagram?(str, anagram) # O(nlogn)
  first_sort = str.split("").sort
  second_sort = anagram.split("").sort

  return first_sort == second_sort
end

#p third_anagram?("gizmo", "sally") #false
#p third_anagram?("elvis", "lives") #true

#Write one more method #fourth_anagram?. 
#This time, use two Hashes to store the number of times each letter appears in both words. 
#Compare the resulting hashes.
#What is the time complexity?
#Bonus: Do it with only one hash.


def fourth_anagram?(str, anagram)
  first_str_hash = {}
  second_str_hash = {}
  str.each_char do |char|
    first_str_hash[char] = 0 if first_str_hash[char].nil?
    first_str_hash[char] += 1
  end

  anagram.each_char do |char|
    second_str_hash[char] = 0 if second_str_hash[char].nil?
    second_str_hash[char] += 1
  end

  first_str_hash == second_str_hash
end

def fourth_anagram_one_hash?(str, anagram)
  hash = {}

  str.each_char do |char|
    hash[char] = 0 if hash[char].nil?
    hash[char] += 1
  end

  anagram.each_char do |char|
    next if hash[char].nil?
    hash[char] -= 1
  end

  hash.delete_if {|k, v| v == 0}

  hash.empty?
end

#p fourth_anagram?("gizmo", "sally") #false
#p fourth_anagram?("elvis", "lives") #true

#p fourth_anagram_one_hash?("gizmo", "sally") #false
#p fourth_anagram_one_hash?("elvis", "lives") #true
