class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to(
    :user,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :artwork,
    class_name: 'Artwork',
    foreign_key: :artwork_id,
    primary_key: :id
  )
  
  #We also want to be able to call an association on comments and artworks to get the users who have liked them.

  has_many(
    :likes, as: :likeable
  )
end