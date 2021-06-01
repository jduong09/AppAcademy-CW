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

  # n_plus_1 query
  def results
    answer_choices = self.answer_choices
    answers = {}

    answer_choices.each do |answer_choice|
      answers[answer_choice.choice] = answer_choice.responses.count
    end

    answers
  end

  # 2 query
  def includes_results
    answer_choices = self.answer_choices.includes(:responses)
    answers = {}

    answer_choices.each do |answer_choice|
      answers[answer_choice.choice] = answer_choice.responses.length
    end

    answers
  end

  def responses_1_query
    acs = AnswerChoice.find_by_sql([<<-SQL, id])
      SELECT
        answer_choices.*, COUNT(responses.id) AS num_responses
      FROM
        answer_choices
      LEFT OUTER JOIN
        responses ON answer_choices.id = responses.answer_choice_id
      WHERE
        answer_choices.question_id = ?
      GROUP BY
        answer_choices.id
    SQL

    acs.inject({}) do |results, ac|
      results[ac.choice] = ac.num_responses; results
    end
  end

end