class Todo < ApplicationRecord
  validates :title, :body, :user_id, presence: true
  validates :done, inclusion: { in: [true, false] }

  belongs_to :user

  has_many :steps, dependent: :destroy
  has_many :taggings
  has_many :tags, through: :taggings, source: :tag

  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end
end