require_relative '../config/environment.rb'


co1 = CarOwner.new("Jallen")
co1 = CarOwner.new("Meghann")

m1 = Mechanic.new("Tashawn", "clunker")
m1 = Mechanic.new("Justin", "clunker")

c1 = Car.new("Toyota", "Camry", "clunker", m1, co1)
c1 = Car.new("Toyota", "Corolla", "clunker", m1, co1)



binding.pry
