class Gym
  attr_reader :name
  @@all = []
  def initialize(name)
    @name = name
    Gym.all << self
  end

  def self.all 
    @@all
  end

  def name 
    @name
  end
end

# must have a name
# cannot change its name


# Get a list of all memberships at a specific gym
  # Gym has many memberships

# return a list of all lifters
  # Gym has many lifters


  # class Artist 
  #   def initialize(name)

  #   end

  # end

  # class Song 
  #   def initialize(title, artist=nil)
  #     if artist != nil 
  #       WritingCredit.new(artist, self)
  #     else
  #       throw "must have an artist"
  #   end

  # end