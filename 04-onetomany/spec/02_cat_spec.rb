require_relative 'spec_helper.rb'

describe Cat do

  before do
    @owner = Owner.new("Hermione")
    @cat = Cat.new("Crookshanks", @owner)
  end

  after do
    Owner.all.clear
  end

  context 'Instance methods' do
    it "initializes with a name and an Owner" do
      expect(@cat.name).to eq("Crookshanks")
      expect(@cat.owner.name).to eq("Hermione")
    end

    it "can change its owner" do
      new_owner =  Owner.new("Harry")
      @cat.owner = new_owner

      expect(@cat.owner.name).to eq("Harry")
    end

    it "can't change its name" do
      expect { @cat.name = "Mr. Whiskers" }.to raise_error NoMethodError
    end

    it "initializes with a nervous mood" do
      expect(@cat.mood).to eq("nervous")
    end

    it "can change its mood" do
      @cat.mood = "playful"
      expect(@cat.mood).to eq("playful")
    end
  end

  describe "Class methods" do
    it "knows all the cats" do
      expect(Cat.all).to include(@cat)
      expect(Cat.all.count).to eq(6)
    end
  end
end
