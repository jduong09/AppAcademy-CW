require_relative 'model_base'
require_relative 'questions_database'
require_relative 'user'
require_relative 'reply'
require_relative 'question'

class QuestionFollows < ModelBase
  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        question_follows
      WHERE 
        id = ?
    SQL

    data[0].nil? ? nil : QuestionFollows.new(data[0])
  end

  def self.followers_for_question_id(question_id)
    #this will follow an array of User objects
    question_follow_data = QuestionsDatabase.instance.execute(<<-SQL, question_id: question_id)
      SELECT
        users.id, users.fname, users.lname
      FROM
        question_follows
      JOIN
        users ON question_follows.user_id = users.id
      WHERE
        question_follows.question_id = :question_id
    SQL

    question_follow_data.map { |datum| User.new(datum) }
  end

  def self.followed_questions_for_user_id(user_id)
    #returns an array of Question objects
    question_follow_data = QuestionsDatabase.instance.execute(<<-SQL, user_id: user_id)
      SELECT
        questions.id, questions.title, questions.body
      FROM
        question_follows
      JOIN
        questions ON question_follows.user_id = questions.author_id
      WHERE
        question_follows.user_id = :user_id
    SQL

    question_follow_data.map { |datum| Question.new(datum) }
  end

  def self.most_followed_questions(n)
    #fetches the n most followed questions
    question_follow_data = QuestionsDatabase.instance.execute(<<-SQL, limit: n)
      SELECT
        questions.id, questions.title, questions.body
      FROM
        questions
      JOIN
        question_follows ON question_follows.question_id = questions.id
      GROUP BY
        questions.id
      HAVING
        COUNT(questions.id)
      ORDER BY
        COUNT(questions.id) DESC 
      LIMIT 
        :limit
    SQL

    question_follow_data.map { |datum| Question.new(datum) }
  end

  attr_reader :id
  attr_accessor :user_id, :question_id
  def initialize(options = {})
    @id = options['id']
    @user_id = options['user_id']
    @question_id = options['question_id']
  end

  def attrs
    { user_id: user_id, question_id: question_id  }
  end
end