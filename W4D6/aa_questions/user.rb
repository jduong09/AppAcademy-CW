require_relative 'model_base'
require_relative 'questions_database'
require_relative 'question'
require_relative 'reply'
require_relative 'question_follows'

class User < ModelBase
  def self.find_by_id(id)
    user_data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE 
        id = ?
    SQL

    user_data[0].nil? ? nil : User.new(user_data[0])
  end

  def self.find_by_name(fname, lname)
    user_data = QuestionsDatabase.instance.execute(<<-SQL, fname: fname, lname: lname)
      SELECT
        users.*
      FROM
        users
      WHERE
        users.fname = :fname AND users.lname = :lname
    SQL

    user_data.map { |datum| User.new(datum) }
  end

  attr_reader :id
  attr_accessor :fname, :lname

  def initialize(options)
    @id = options["id"]
    @fname = options["fname"]
    @lname = options["lname"]
  end

  def save
    if @id
      QuestionsDatabase.execute(<<-SQL, attrs.merge({ id: id }))
        UPDATE
          users
        SET
          fname = :fname, lname = :lname
        WHERE
          users.id = :id
      SQL
    else
      QuestionsDatabase.execute(<<-SQL, attrs)
        INSERT INTO
          users (fname, lname)
        VALUES
          (:fname, :lname)
      SQL

      @id = QuestionsDatabase.last_insert_row_id
    end
    self
  end

  def attrs
    { fname: fname, lname: lname }
  end

  def authored_questions
    Question.find_by_author_id(id)
  end

  def authored_replies
    Reply.find_by_user_id(id)
  end

  def followed_questions
    #one-liner calling QuestionFollow method
    QuestionFollows.followed_questions_for_user_id(id)
  end

  def liked_questions
    QuestionLike.liked_questions_for_user_id(id)
  end

  def average_karma
    QuestionsDatabase.get_first_value(<<-SQL, author_id: self.id)
      SELECT
        CAST(COUNT(question_likes.id) AS FLOAT) /
          COUNT(DISTINCT(questions.id)) AS avg_karma
      FROM
        questions
      LEFT OUTER JOIN
        question_likes
      ON
        questions.id = question_likes.question_id
      WHERE
        questions.author_id = :author_id
    SQL
  end

end