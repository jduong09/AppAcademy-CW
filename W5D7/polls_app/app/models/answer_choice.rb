class AnswerChoice < ApplicationRecord

  #question
  belongs_to(
    :question,
    class_name: 'Question',
    foreign_key: :question_id,
    primary_key: :id
  )

  #responses
  has_many(
    :responses,
    class_name: 'Response',
    foreign_key: :answer_choice_id,
    primary_key: :id
  )

  def self.create_for_question_and_choice!(question, choice)
    AnswerChoice.create!(
      question_id: question.id,
      choice: choice
    )
  end
end