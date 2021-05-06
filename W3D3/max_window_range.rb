#Given an array, and a window size w, 
#find the maximum range (max - min) within a set of w elements.

#Let's say we are given the array [1, 2, 3, 5] and a window size of 3. 
#Here, there are only two cases to consider:

#1. [1 2 3] 5
#2. 1 [2 3 5]

def max_window_range(arr, w)
  current_max_range = 0

  arr.each_with_index do |ele, i|
    window = arr[i...(w + i)]
    min = window[0]
    max = window[-1]

    if max - min > current_max_range
      current_max_range = max - min
    end
  end

  current_max_range
end

array = [1, 2, 3, 5]
#max_window_range(array, 3)
#max_window_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
#max_window_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
#max_window_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
#max_window_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8

# Phase 2 : MyQueue

class MyQueue

  def initialize
    @queue = []
  end

  def enqueue(ele)
    @queue << ele
  end

  def dequeue
    @queue.shift
  end

  def peek
    @queue[0]
  end

  def empty?
    @queue == []
  end

  def size
    @queue.length
  end
end

class MyStack
  def initialize
    @store = []
  end

  def peek
    @store[0]
  end

  def size
    @store.length
  end

  def empty?
    @store == []
  end

  def pop
    @store.pop
  end

  def push(ele)
    @store << ele
  end
end
