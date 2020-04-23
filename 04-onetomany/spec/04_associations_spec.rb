require_relative 'spec_helper.rb'

describe "Associations" do
  before do
    @owner = Owner.new("Timmy")
  end

  after do
    Owner.all.clear
  end

  context 'Owner instance methods' do
    describe "#cats" do
      it "returnsa a collection of all the cats that belong to the owner" do
        cat_1 = Cat.new("Garfield", @owner)
        cat_2 = Cat.new("Fido", @owner)
        cat_3 = Cat.new("Whiskers", @owner)

        expect(@owner.cats[0]).to eq(cat_1)
        expect(@owner.cats[1]).to eq(cat_2)
        expect(@owner.cats[2]).to eq(cat_3)
        expect(@owner.cats.count).to eq(3)
      end
    end

    describe "#dogs" do
      it "returnsa a collection of all the dogs that belong to the owner" do
        dog_1 = Dog.new("Fido", @owner)
        dog_2 = Dog.new("Snuffles", @owner)
        dog_3 = Dog.new("Charley", @owner)

        expect(@owner.dogs[0]).to eq(dog_1)
        expect(@owner.dogs[1]).to eq(dog_2)
        expect(@owner.dogs[2]).to eq(dog_3)
        expect(@owner.dogs.count).to eq(3)
      end
    end
    describe "#buy_cat" do
      it 'can buy a cat that is an instance of the Cat class' do
        expect(@owner.cats.count).to eq(0)

        @owner.buy_cat("Crookshanks")
        @owner.buy_cat("Whiskers")
        @owner.buy_cat("Garfield")

        @owner.cats.each do |cat|
          expect(cat).to be_a(Cat)
        end

        expect(@owner.cats.count).to eq(3)
      end

      it 'knows about its cats' do
        @owner.buy_cat("Crookshanks")
        @owner.buy_cat("Whiskers")
        @owner.buy_cat("Garfield")

        expect(@owner.cats[0].name).to eq("Crookshanks")
        expect(@owner.cats[1].name).to eq("Whiskers")
        expect(@owner.cats[2].name).to eq("Garfield")
      end
    end

    describe "#buy_dog" do
      it 'can buy a dog that is an instance of the Dog class' do
        expect(@owner.dogs.count).to eq(0)

        @owner.buy_dog("Snuffles")
        @owner.buy_dog("Fido")
        @owner.buy_dog("Rover")

        @owner.dogs.each do |dog|
          expect(dog).to be_a(Dog)
        end

        expect(@owner.dogs.count).to eq(3)
      end

      it 'knows about its dogs' do
        @owner.buy_dog("Snuffles")
        @owner.buy_dog("Fido")
        @owner.buy_dog("Rover")

        expect(@owner.dogs[0].name).to eq("Snuffles")
        expect(@owner.dogs[1].name).to eq("Fido")
        expect(@owner.dogs[2].name).to eq("Rover")
      end
    end

    describe "#walk_dogs" do
      it "walks the dogs which makes the dogs' moods happy" do
        dog = Dog.new("Daisy", @owner)
        @owner.walk_dogs
        expect(dog.mood).to eq("happy")
      end
    end

    describe "#feed_cats" do
      it "feeds cats which makes the cats' moods happy" do
        cat = Cat.new("Muffin", @owner)
        @owner.feed_cats
        expect(cat.mood).to eq("happy")
      end
    end

    describe "#sell_pets" do
      it 'can sell all its pets, which makes them nervous' do
        fido = Dog.new("Fido", @owner)
        tabby = Cat.new("Tabby", @owner)

        [fido, tabby].each {|o| o.mood = "happy" }

        @owner.sell_pets

        [fido, tabby].each { |o| expect(o.mood).to eq("nervous") }
      end

      it 'can sell all its pets, which leaves them without an owner' do
        fido = Dog.new("Fido", @owner)
        tabby = Cat.new("Tabby", @owner)

        [fido, tabby].each {|o| o.mood = "happy" }

        @owner.sell_pets

        [fido, tabby].each { |o| expect(o.owner).to be(nil) }
        expect(@owner.cats.count).to eq(0)
        expect(@owner.dogs.count).to eq(0)
      end
    end

    describe "#list_pets" do
      it 'can list off its pets' do
        @owner.buy_cat("Crookshanks")
        @owner.buy_cat("Fido")
        @owner.buy_dog("Snuffles")
        @owner.buy_dog("Charley")
        expect(@owner.list_pets).to eq("I have #{@owner.dogs.count} dog(s), and #{@owner.cats.count} cat(s).")
      end
    end
  end
end
