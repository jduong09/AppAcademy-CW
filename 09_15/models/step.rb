class Step < ApplicationRecord
  validates :title, :body, :todo_id, presence: true
  validates :done, inclusion: { in: [true, false] }

  belongs_to :todo

end