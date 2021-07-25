class Sub < ApplicationRecord
  validates :title, :description, presence: true

  belongs_to(
    :moderator, 
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :post_subs,
    class_name: "PostSub",
    foreign_key: :sub_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :sub
  )

  has_many :posts, through: :post_subs, source: :post
end