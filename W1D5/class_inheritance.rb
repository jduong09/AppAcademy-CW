class Employee
  attr_reader :name, :salary
  def initialize(name, title, salary, boss)
    @name = name
    @title = title
    @salary = salary
    @boss = boss
  end

  def bonus(multiplier)
    salary * multiplier
  end
end

class Manager < Employee
  def initialize(name, title, salary, boss)
    super(name, title, salary, boss)
    @employees = []
  end

  #total salary of all sub-employees * multiplier
  def bonus(multiplier)
    total_salary = 0
    @employees.each do |employee|
      total_salary += employee[1]
    end

    total_salary * multiplier
  end

  def add_employee(employee)
    @employees << [employee.name, employee.salary]
  end
end

#Employee Structure
ned = Manager.new("Ned", "Founder", 1000000, nil)
darren = Manager.new("Darren", "TA Manager", 78000, "Ned")
shawna = Employee.new("Shawna", "TA", 12000, "Darren")
david = Employee.new("David", "TA", 10000, "Darren")

ned.add_employee(darren)
ned.add_employee(shawna)
ned.add_employee(david)

darren.add_employee(shawna)
darren.add_employee(david)

puts ned.bonus(5) # => 500_000
puts darren.bonus(4) # => 88_000
puts david.bonus(3) # => 30_000