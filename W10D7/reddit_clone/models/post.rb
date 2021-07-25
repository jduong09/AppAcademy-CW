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

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :post_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many :subs, through: :post_subs, source: :sub

  def comments_by_parent_id
    hashed_comments = Hash.new { |hash, key| hash[key] = [] }

    self.comments.includes(:author).each do |comment|
      hashed_comments[comment.parent_comment_id] << comment
    end

    return hashed_comments
  end
end