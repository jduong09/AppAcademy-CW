class Response < ApplicationRecord
  validate :not_duplicate_response, unless: -> { answer_choice.nil? }

  validate :author_response, unless: -> { answer_choice.nil? }

  #answer choice
  belongs_to(
    :answer_choice,
    class_name: 'AnswerChoice',
    foreign_key: :answer_choice_id,
    primary_key: :id
  )

  #respondent
  belongs_to(
    :respondent,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id
  )

  has_one :question, through: :answer_choice, source: :question

  def self.create_for_user_and_answer!(user, answer)
    Response.create!(
      user_id: user.id,
      answer_choice_id: answer.id
    )
  end

  def sibling_responses
    question
      .responses
      .where.not(id: self.id)
  end

  def respondent_already_answered?
    sibling_responses.exists?(user_id: self.user_id)
  end

  #author can't respond to own poll
  def author_response
    poll_author_id = self.answer_choice.question.poll.author_id

    if poll_author_id == self.user_id
      errors[:user_id] << 'author cannot vote'
    end
  end

  #custom validation to check if the user has voted for a question.
  def not_duplicate_response
    if respondent_already_answered?
      errors[:user_id] << 'cannot vote twice for question'
    end
  end

end