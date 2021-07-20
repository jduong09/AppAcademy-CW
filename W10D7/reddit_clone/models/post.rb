class Post < ApplicationRecord
  validates :title, :context, presence: true

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :post_subs,
    class_name: "PostSub",
    foreign_key: :post_id,
    primary_key: :id,
    dependent: :destroy,
    inverse_of: :post
  )

  has_many :subs, through: :post_subs, source: :sub
end