class Membership
  attr_reader :cost, :lifter, :gym
  @@all = []
  # {
  #   cost: 100,
  #   lifter: lifter1,
  #   gym: gym1
  # }
  def initialize(hash)
    binding.pry
    @cost = hash[:cost]
    @lifter = hash[:lifter]
    @gym = hash[:gym]
    Membership.all << self
  end

  def self.all 
    @@all
  end
  # def cost 
  #   @cost
  # end
end

# membership must have a cost 
  # to read that cost we use membership.cost

# membership cannot change the cost

# return a list of all of the memberships
# self.all 