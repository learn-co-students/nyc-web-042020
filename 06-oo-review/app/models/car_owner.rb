class CarOwner

  attr_reader :name
  @@all = []
  def initialize(name)
    @name = name
    CarOwner.all << self
  end

  # association method
  def cars 
    Car.all.select do |car|
      car.car_owner == self
    end
  end
  
  def mechanics
    cars.map do |car|
      car.mechanic
    end.uniq 
  end

  def self.all
    @@all
  end

  def self.average_number_of_cars
    # total cars/total owners
   total_owners = self.all.count # => how many instances there are of CarOwner
   total_cars = 0 # => 1, => 4
    self.all.each do |car_owner|
      total_cars = total_cars + car_owner.cars.count
    end
    total_cars/total_owners


    # self.all_cars_with_owners.count
  end

  # def self.all_cars_with_owners
  #   Car.all.select do |car|
  #     car.car_owner != nil
  #   end
  # end

end
