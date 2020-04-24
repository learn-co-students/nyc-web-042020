# You don't need to require any of the files in lib or pry.
# We've done it for you here.
require_relative '../config/environment.rb'

# test code goes here


# membership arguments: cost, lifter, gym
gym1 = Gym.new("Planet Fitness")
gym2 = Gym.new("Equinox")
lifter1 = Lifter.new("Tashawn", 100)
lifter2 = Lifter.new("Anna", 100)
lifter3 = Lifter.new("Ryan", 100)
hash1 = {gym: gym1, cost: 100, lifter: lifter1}
hash2 = {gym: gym1, cost: 100, lifter: lifter2}
hash3 = {gym: gym2, cost: 100, lifter: lifter3}
membership1 = Membership.new(hash1 )
membership2 = Membership.new(hash2 )
membership3 = Membership.new(hash3 )

binding.pry

puts "Gains!"
