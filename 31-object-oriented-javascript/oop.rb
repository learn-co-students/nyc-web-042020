require 'pry'

class Person
  # age, name, interests, bio()
  attr_accessor :age, :name, :interests

  def initialize(age, name, interests)
    @age = age
    @name = name
    @interests = interests
  end

  def bio
    "#{@name} is #{age} years old and enjoys #{interests.join(', ')}"
  end
end

class Student < Person
  # grade, greeting()
  attr_accessor :grade
  
  def initialize(age, name, interests, grade)
    super(age, name, interests)
    @grade = grade
  end

  def greeting
    "#{name} is in grade #{grade}. Cool. "
  
    
    def bio
      "something different"
    end
  
end

michael = Person.new('none of your biz', "Michael", ["Simpsons", "Harry Potter"])

steven = Student.new('older than you think', "Steven", ["knitting", "spoon carving", "skiing"], 25)

binding.pry
puts 'okthxbye' 