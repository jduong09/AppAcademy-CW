class Sub < ApplicationRecord
  validates :title, :description, presence: true

  belongs_to(
    :moderator, 
    class_name: 'User',
    foreign_key: :creator_id,
    primary_key: :id
  )
end