class Tag < ApplicationRecord
  has_many :todos, through: :taggings, source: :todo
end