class Question < ApplicationRecord

  #answer choices
  has_many(
    :answer_choices,
    class_name: 'AnswerChoice',
    foreign_key: :question_id,
    primary_key: :id
  )

  #poll
  belongs_to(
    :poll,
    class_name: 'Poll',
    foreign_key: :poll_id,
    primary_key: :id
  )

  has_many :responses, through: :answer_choices, source: :responses

  def self.create_question!(poll, title)
    Question.create!(
      poll_id: poll.id,
      text: title
    )
  end

end