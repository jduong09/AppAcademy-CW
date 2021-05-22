require_relative 'model_base'
require_relative 'questions_database'
require_relative 'user'
require_relative 'reply'
require_relative 'question_follows'

class Question < ModelBase
  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        questions
      WHERE 
        id = ?
    SQL

    data[0].nil? ? nil : Questions.new(data[0])
  end

  def self.find_by_author_id(author_id)
    questions_data = QuestionsDatabase.instance.execute(<<-SQL, author_id: author_id)
      SELECT
        questions.*
      FROM
        questions
      WHERE
        questions.author_id = :author_id 
      ;
    SQL

    questions_data.map { |datum| Question.new(datum) }
  end

  def self.most_followed(n)
    QuestionFollows.most_followed_questions(n)
  end

  def self.most_liked(n)
    QuestionLike.most_liked_questions(n)
  end

  attr_reader :id
  attr_accessor :title, :body, :author_id

  def initialize(options = {})
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @author_id = options['author_id']
  end

  def save
    if @id
      QuestionsDatabase.execute(<<-SQL, attrs.merge({ id: id }))
        UPDATE
          questions
        SET
          title = :title, body = :body, author_id = :author_id
        WHERE
          questions.id = :id
      SQL
    else
      QuestionsDatabase.execute(<<-SQL, attrs)
        INSERT INTO
          questions (title, body, author_id)
        VALUES
          (:title, :body, :author_id)
      SQL

      @id = QuestionsDatabase.last_insert_row_id
    end

    self
  end

  def attrs
    { title: title, body: body, author_id: author_id }
  end

  def author
    User.find_by_id(author_id)
  end

  def replies
    Reply.find_by_question_id(id)
  end

  def followers
    Questionfollows.followers_for_question_id(id)
  end

  def num_likes
    QuestionLike.num_likes_for_question_id(id)
  end

  def likers
    QuestionLike.likers_for_question_id(id)
  end
end