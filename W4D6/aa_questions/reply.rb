require_relative 'model_base'
require_relative 'questions_database'
require_relative 'user'
require_relative 'question'
require_relative 'question_follows'

class Reply < ModelBase
  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        replies
      WHERE 
        id = ?
    SQL

    data[0].nil? ? nil : Reply.new(data[0])
  end

  def self.find_by_parent_id(parent_id)
    replies_data = QuestionsDatabase.execute(<<-SQL, parent_reply_id: parent_id)
      SELECT
        replies.*
      FROM
        replies
      WHERE
        replies.parent_reply_id = :parent_reply_id
    SQL

    replies_data.map { |reply_data| Reply.new(reply_data) }
  end

  def self.find_by_author_id(author_id)
    replies_data = QuestionsDatabase.instance.execute(<<-SQL, author_id: author_id)
      SELECT
        replies.*
      FROM
        replies
      WHERE
        replies.author_id = :author_id
    SQL

    replies_data.map { |datum| Reply.new(datum) }
  end

  def self.find_by_question_id(question_id)
    replies_data = QuestionsDatabase.instance.execute(<<-SQL, question_id: question_id)
      SELECT
        replies.*
      FROM
        replies
      WHERE
        replies.question_id = :question_id
    SQL

    replies_data.map { |datum| Reply.new(datum) }
  end

  attr_reader :id
  attr_accessor :question_id, :parent_reply_id, :author_id, :body

  def initialize(options = {})
    @id = options['id']
    @question_id = options['question_id']
    @parent_reply_id = options['parent_reply_id']
    @author_id = options['author_id']
    @body = options['body']
  end

  def save
    if @id
      QuestionsDatabase.execute(<<-SQL, attrs.merge({ id: @id }))
        UPDATE
          replies
        SET
          question_id = :question_id,
          parent_reply_id = :parent_reply_id,
          author_id = :author_id,
          body = :body
        WHERE
          replies.id = :id
      SQL
    else
      QuestionsDatabase.execute(<<-SQL, attrs)
        INSERT INTO
          replies (question_id, parent_reply_id, author_id, body)
        VALUES
          (:question_id, :parent_reply_id, :author_id, :body)
      SQL

      @id = QuestionsDatabase.last_insert_row_id
    end
  end

  def attrs
    { question_id: question_id, 
    parent_reply_id: parent_reply_id, 
    author_id: author_id, 
    body: body }
  end

  def author
    User.find_by_id(author_id)
  end

  def question
    Question.find_by_id(question_id)
  end

  def parent_reply
    Reply.find_by_id(parent_reply_id)
  end

  def child_replies
    Reply.find_by_parent_id(id)
  end
end