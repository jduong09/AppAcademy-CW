class Artwork < ApplicationRecord
  validates :title, uniqueness: { scope: :artist_id,
    message: "should only have one artwork with this title"
  }

  validates :favorite, inclusion: [true, false]

  validates :title, presence: true

  belongs_to(
    :artist,
    class_name: 'User',
    foreign_key: :artist_id,
    primary_key: :id
  )

  has_many(
    :artwork_shares,
    class_name: 'ArtworkShare',
    foreign_key: :artwork_id,
    primary_key: :id
  )

  has_many :shared_viewers, through: :artwork_shares, source: :viewer

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :artwork_id,
    primary_key: :id,
    dependent: :destroy
  )

  #We also want to be able to call an association on comments and artworks to get the users who have liked them.
  has_many(
    :likes, as: :likeable
  )
end