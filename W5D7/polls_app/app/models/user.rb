class User < ApplicationRecord
  validates :username, presence: true

  #authored polls
  has_many(
    :authored_polls,
    class_name: 'Poll',
    foreign_key: :author_id,
    primary_key: :id
  )

  #responses
  #has_many through statement?
  has_many(
    :responses,
    foreign_key: :user_id,
    primary_key: :id
  )
end