# Pseudocode
# Create a list class
# Create an add item method
# Create a view items method
# Create a remove items method
# Create an edit items method
# Create an instance of the class
# TDD with all of the methods


# Your fabulous code goes here....

class List
  attr_reader :list

  def initialize
    @list = []
  end

  def add_item(item)
    @list << item
  end

  def remove_item(item)
    @list.delete(item)
  end

  def edit_item(item, new_item)
    index = @list.find_index(item)
    @list[index] = new_item
  end
end




# DRIVER CODE GOES HERE.
grocery = List.new

grocery.add_item("bacon") #can add an item
p grocery.list #can view items

grocery.add_item("stuffing")
grocery.remove_item("stuffing") #can remove items
p grocery.list

grocery.edit_item("stuffing", "bacon")
p grocery.list