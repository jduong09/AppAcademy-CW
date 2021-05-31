class Poll < ApplicationRecord
  #author
  belongs_to(
    :author,
    class_name: 'User',
    foreign_key: :author_id,
    primary_key: :id
  )

  #questions
  has_many(
    :questions,
    class_name: 'Question',
    foreign_key: :poll_id,
    primary_key: :id
  )

  def self.create_for_author_and_title!(author, title)
    Poll.create!(
      author_id: author.id,
      title: title
    )
  end
end