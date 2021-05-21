require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class User
  attr_reader :id
  attr_accessor :fname, :lname

  def self.all
    data = QuestionsDatabase.instance.execute("SELECT * FROM users")
    data.map { |datum| User.new(datum) }
  end

  def self.find_by_id(id)
    data = QuestionsDatabase.instance.execute(<<-SQL, id)
      SELECT
        *
      FROM
        users
      WHERE 
        id = ?
    SQL

    data[0].nil? ? nil : User.new(data[0])
  end

  def initialize(options)
    @id = options["id"]
    @fname = options["fname"]
    @lname = options["lname"]
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