class Cat
  # code goes here
  attr_reader :name 
  attr_accessor :owner, :mood
  @@all=[]
  def initialize(name, owner, mood="nervous")
    @name = name 
    @owner = owner #=> <Owner:1234>
    @mood = mood
    # @@all << self
    Cat.all << self
  end

  def self.all
    @@all
  end
end