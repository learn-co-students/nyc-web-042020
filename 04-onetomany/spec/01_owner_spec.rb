require_relative 'spec_helper.rb'

describe Owner do

  before do
    @owner = Owner.new("Victoria")
  end

  context 'Instance methods' do

    describe "#name" do
      it "can have a name" do
        expect(@owner.name).to eq("Victoria")
      end

      it "cannot change owner's name" do
        expect { @owner.name = "Beckham" }.to raise_error NoMethodError
      end
    end

    describe "#species" do
      it "initializes with species set to human" do
        expect(@owner.species).to eq("human")
      end

      it "can't change its species" do
        expect { @owner.species = "hamster" }.to raise_error NoMethodError
      end
    end

    describe "#say_species " do
      it "can say its species" do
        expect(@owner.say_species).to eq("I am a human.")
      end
    end
  end

  context 'Class methods' do

    it ".all returns all instances of Owner that have been created" do
      expect(Owner.all).to include(@owner)
    end

    it ".count returns the number of owners that have been created" do
      expect(Owner.count).to eq(7)

      Owner.new("Melanie")
      Owner.new("Ginger")
      expect(Owner.count).to eq(9)
    end

    it ".reset_all can reset the owners that have been created" do
      Owner.reset_all
      expect(Owner.count).to eq(0)
    end
  end
end
