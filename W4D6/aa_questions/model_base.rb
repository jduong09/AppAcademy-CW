require 'active_support/inflector'
require_relative 'questions_database'

class ModelBase
  def self.table
    self.to_s.tableize
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.get_first_row(<<-SQL, id)
      SELECT
        *
      FROM
        #{table}
      WHERE
        id = ?
    SQL

    data.nil? ? nil : self.new(data)
  end

  def self.all
    data = QuestionsDatabase.execute(<<-SQL)
      SELECT
        *
      FROM
        #{table}
    SQL

    data.map { |datum| self.new(datum) }
  end

  def create
    raise "#{self} already in database" if self.id

    QuestionsDatabase.instance.execute(<<-SQL, self.fname, self.lname)
      INSERT INTO 
        users (fname, lname)
      VALUES
        (?, ?)
    SQL
  end

  def update
    raise "#{self} not in database" unless self.id

    QuestionsDatabase.instance.execute(<<-SQL, self.fname, self.lname, self.id)
      UPDATE
        users
      SET
        fname = ?, lname = ?
      WHERE
        id = ?
    SQL
  end
end