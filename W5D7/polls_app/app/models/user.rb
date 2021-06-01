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

  #return polls where the user has answered all the questions in the poll
  def completed_polls
  end

end