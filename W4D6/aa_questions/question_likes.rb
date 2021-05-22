require_relative 'model_base'
require_relative 'questions_database'
require_relative 'reply'
require_relative 'question_follows'
require_relative 'user'
require_relative 'question'

class QuestionLike < ModelBase
  def self.likers_for_question_id(question_id)
    users_data = QuestionsDatabase.execute(<<-SQL, question_id: question_id)
      SELECT
        users.*
      FROM
        users
      JOIN
        question_likes
      ON
        users.id = question_like.user_id
      WHERE
        question_like.question_id = :question_id
    SQL

    users_data.map { |user_data| User.new(user_data) }
  end

  def self.num_likes_for_question_id(question_id)
    QuestionsDatabase.get_first_value(<<-SQL, question_id: question_id)
      SELECT
        COUNT(*) AS likes
      FROM
        questions
      JOIN
        question_likes
      ON
        questions.id = question_like.question_id
      WHERE
        questions.id = :question_id
    SQL
  end

  def self.liked_questions_for_user_id(user_id)
    questions_data = QuestionsDatabase.execute(<<-SQL, user_id: user_id)
      SELECT
        questions.*
      FROM
        questions
      JOIN
        question_likes
      ON
        questions.id = question_like.question_id
      WHERE
        question_like.user_id = :user_id
    SQL

    questions_data.map { |question_data| Question.new(question_data) }
  end

  def self.most_liked_questions(n)
    questions_data = QuestionsDatabase.execute(<<-SQL, limit: n)
      SELECT
        questions.*
      FROM
        questions
      JOIN
        question_likes
      ON
        questions.id = question_likes.question_id
      GROUP BY
        questions.id
      ORDER BY
        COUNT(*) DESC
      LIMIT
        :limit
    SQL

    questions_data.map { |question_data| Question.new(question_data) }
  end

  attr_reader :id
  attr_accessor :user_id, :question_id
  
  def initialize(options = {})
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end

  def attrs
    { user_id: user_id, question_id: question_id}
  end
end