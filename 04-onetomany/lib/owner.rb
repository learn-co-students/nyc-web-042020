class Owner
  # code goes here
  attr_reader :name, :species
  @@all = [] 
  def initialize(name)
    @name = name 
    @species = "human"
    # @@all << self
    Owner.all << self
    # self => <Owner:129384729347 @name:>
    # self.save
  end
  # def species
  #   @species
  # end
  def say_species
    # "I am a human."
    # self => instance => Owner
    "I am a #{self.species}."
  end

  def self.all 
    @@all
  end

  def self.count 
    self.all.count
  end

  def self.reset_all
    self.all.clear
  end

#owner.cats
  def cats 
    # self => instance => <Owner:1234>
    # return all of the cats that belong to the owner 
    Cat.all.select do |cat|
      # cat1.owner => <Owner:1234>
      # cat2.owner => <Owner:1234>
      # cat3.owner => <Owner:5678>
      cat.owner == self
    end
    # [cat1, cat2, cat3]

  end

  def buy_cat(cat_name)
    Cat.new(cat_name, self)
  end

  # def self.all_pets
  #   ["Tashawn", "James"]
  #   self.all.each do |owner|
  #     owner.pets
  #   end
  # end

end

