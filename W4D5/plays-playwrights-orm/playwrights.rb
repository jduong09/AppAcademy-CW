require 'sqlite3'
require 'singleton'

class PlaywrightsDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('plays.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Playwrights
  attr_reader :id
  attr_accessor :name, :birth_year

  def self.all
    data = PlaywrightsDBConnection.instance.execute("SELECT * FROM playwrights")
    data.map { |datum| Playwrights.new(datum) }
  end

  def self.find_by_name(name)
    result = PlaywrightsDBConnection.instance.execute(<<-SQL, name)
      SELECT
        *
      FROM
        playwrights
      WHERE
        name = ?
    SQL
    raise "#{name} is not in database" if result.empty?
    result
  end

  def self.get_plays(playwright)
    result = PlaywrightsDBConnection.instance.execute(<<-SQL, playwright)
      SELECT
        *
      FROM
        playwrights
      JOIN
        plays ON playwrights.id = plays.playwright_id
      WHERE
        name = ?
    SQL
    raise "#{playwright} is not in database" if result.empty?
    result
  end

  def initialize(options)
    @id = options['id']
    @name = options['name']
    @birth_year = options['birth_year']
  end

  def create
    raise "#{self} already in database" if self.id

    PlaywrightsDBConnection.instance.execute(<<-SQL, self.name, self.birth_year)
      INSERT INTO
        playwrights (name, birth_year)
      VALUES
        (?, ?)
    SQL
    self.id = PlaywrightsDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless self.id
    PlaywrightsDBConnection.instance.execute(<<-SQL, self.name, self.birth_year, self.id)
      UPDATE
        playwrights
      SET
        name = ?, birth_year = ?
      WHERE
        id = ?
    SQL
  end

end