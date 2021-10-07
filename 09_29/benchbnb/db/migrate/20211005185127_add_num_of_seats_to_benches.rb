class AddNumOfSeatsToBenches < ActiveRecord::Migration[5.2]
  def change
    add_column :benches, :num_of_seats, :integer
  end
end
