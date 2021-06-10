class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true

  has_many(
    :artworks,
    class_name: "Artwork",
    foreign_key: :artist_id,
    primary_key: :id,
    #This ensures that the associated records are also destroyed.
    dependent: :destroy
  )

  has_many(
    :artwork_shares,
    class_name: "ArtworkShare",
    foreign_key: :viewer_id,
    primary_key: :id,
    #This ensures that the associated records are also destroyed.
    dependent: :destroy
  )

  has_many :shared_artworks, through: :artwork_shares, source: :artwork

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy
  )

  #We'd like to be able to call associations on a user and return their liked comments and artworks.
  has_many(
    :likes,
    class_name: 'Like',
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many :comment_likes, through: :likes, source: :likeable, source_type: 'Comment'

  has_many :artwork_likes, through: :likes, source: :likeable, source_type: 'Artwork'

  def favorite_artworks
    artworks.where(favorite: true)
  end

  def favorite_shared_artworks
    artwork_shares.where(favorite: true)
  end
end