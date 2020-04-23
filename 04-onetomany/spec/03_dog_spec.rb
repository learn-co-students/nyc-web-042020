require_relative 'spec_helper.rb'

describe Dog do

  before do
    @owner = Owner.new("Timmy")
    @dog = Dog.new("Lassie", @owner)
  end

  after do
    Owner.all.clear
  end

  context 'Instance methods' do
    it "initializes with a name and an Owner" do
      expect(@dog.name).to eq("Lassie")
      expect(@dog.owner.name).to eq("Timmy")
    end

    it "can change its owner" do
      new_owner =  Owner.new("Jane")
      @dog.owner = new_owner

      expect(@dog.owner.name).to eq("Jane")
    end

    it "can't change its name" do
      expect { @dog.name = "Fido" }.to raise_error NoMethodError
    end

    it "initializes with a nervous mood" do
      expect(@dog.mood).to eq("nervous")
    end

    it "can change its mood" do
      @dog.mood = "hungry"
      expect(@dog.mood).to eq("hungry")
    end
  end

  describe "Class methods" do
    it "knows all the dogs" do
      Dog.all.include?(@dog)
    end
  end

end
