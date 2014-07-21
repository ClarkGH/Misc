#Pseudocode
# Start with a max number of 100
# find all the multiples of 3 and/or 5 below 100
# find the sum of all the multiples of 3 or 5 below 100
# change it to take any value afterwards

def range_sum(max_val)

  range = (1...max_val).to_a

  multiple_three_five = []

  range.each do |num|
    if num % 5 == 0 && num % 3 == 0
      multiple_three_five << num
    elsif num % 5 == 0 && num %3 != 0
      multiple_three_five << num
    elsif num % 3 == 0 && num %5 != 0
      multiple_three_five << num
    end
  end
  p multiple_three_five.sort!
  p multiple_three_five.inject{|sum,num| sum + num }
end

range_sum(100)