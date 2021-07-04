class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :name, null: false
      t.boolean :private, default: false
      t.integer :user_id, null: false
      t.boolean :complete, default: false
      
      t.timestamps
    end
  end
end
