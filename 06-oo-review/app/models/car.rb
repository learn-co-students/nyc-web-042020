class Car

  attr_reader :make, :model, :mechanic, :car_owner, :classification
  @@all = []
  @@classifications = []
  def initialize(make, model, classification, mechanic, carOwner)
    @make = make
    @model = model
    @car_owner = carOwner 
    @mechanic = mechanic

    @classification = classification
    Car.all << self
  end

  def self.all 
    @@all
  end
  # def self.classifications
  #   @@classifications
  # end

  def self.classifications
    self.all.map do |car|
      car.classification
    end
  end

  def self.find_mechanics(classification)
    #return all Mechanics that can work on this classification
    Mechanic.all.select do |m|
      m.classification == classification
    end
  end
end

