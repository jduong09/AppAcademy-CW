class CreateTodo < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.boolean :done, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
