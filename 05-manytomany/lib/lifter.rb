class Lifter
  attr_reader :name, :lift_total
  @@all = []
  def initialize(name, lift_total)
    @name = name
    @lift_total = lift_total
    # @@all << self
    Lifter.all << self 
  end

  def self.all 
    @@all
  end

  def memberships 
    Membership.all.select do |membership|
      membership.lifter == self 
    end
  end

  def gyms 
   memberships.map do |membership|
    membership.gym
   end
   # [<Gym:0x00007fa1a9124038 @name="Planet Fitness">]
    # Gym.all.select do |gym|
    #   gym.lifters == self
    # end
  end

  def sign_up(gym, cost)
    arguments_hash = {cost: cost, gym: gym, lifter: self}
    Membership.new(arguments_hash)
  end



end

# must have a name and a lift_total
# cannot change the name or lift_total

# get a list of all listers
  # they want a method that will return a list of all listers 
  # @@all def self.all


  # get a list of all the lifter's memberships
    # instance method
    # .lifters
    # Lifter has many memberships 

    #Get a list of all the gyms that a specific lifter has memberships to
      # Lifter has many gyms 


      # a method that will recieve a gym instance and a membership cost (number) and create a new membership