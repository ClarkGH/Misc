#201 dollars given
#want the amount given in pennies
#create a hash for numbers to words
#divide the main number by 100, and the remainder will be shown as cents

class Machine
  def pennies_to_dollars(amt)
    if amt.is_a?(Integer)
      num_word = {1 => "one", 2 => "two"}
      dollar, cent = amt.divmod(100)
      "#{num_word[dollar]} dollars and #{num_word[cent]} cents"
    else
      "Please input an integer"
    end
  end
end

first_machine = Machine.new
p first_machine.pennies_to_dollars(2)