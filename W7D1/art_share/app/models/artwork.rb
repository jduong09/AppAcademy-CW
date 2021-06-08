class Artwork < ApplicationRecord
  validates :title, uniqueness: { scope: :artist_id,
    message: "should only have one artwork with this title"
  }

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
end