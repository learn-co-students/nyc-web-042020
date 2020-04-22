RSpec.describe 'Person' do
  let(:stella) { Person.new('Stella') }
  let(:blanche) { Person.new('Blanche') }
  let(:people) { [stella, blanche] }
  let!(:name_hash) { { stella => 'Stella', blanche => 'Blanche' } }

  context 'instantiation' do
    describe '::new' do
      it 'a new person is instantiated with a name' do
        expect { Person.new('Blake') }.to_not raise_error
      end
    end

    describe '#initialize' do
      describe '#name' do
        it 'a new person knows its name once he/she has been initialized' do
          name_hash.each do |person, name|
            expect(person.name).to eq(name)
          end
        end

        it 'a new person instance cannot overwrite the name it was instantied with' do
          name_hash.each do |person, _name|
            expect { person.name = 'some_new_name' }.to raise_error(NoMethodError)
          end
        end
      end

      describe '#bank_account' do
        it 'a new person instance is initialized with a bank_account balance of $25' do
          people.each { |person| expect(person.bank_account).to eq(25) }
        end

        it 'a person instance can change his/her bank_account amount' do
          people.each do |person|
            original_amount = person.bank_account
            expect(person.bank_account += 1).to eq (original_amount + 1)
          end
        end
      end

      describe '#happiness' do
        it ' a new person instance is initialized with a happiness index of 8' do
          people.each { |person| expect(person.happiness).to eq(8) }
        end

        it 'a person instance can change his/her happiness index' do
          people.each do |person|
            person.happiness = 9
            expect(person.happiness).to eq(9)
          end
        end

        it "a person's happiness doesn't exceed 10" do
          people.each do |person|
            person.happiness = 11
            expect(person.happiness).to eq(10)
          end
        end

        it "a person's happiness doesn't go below 0" do
          people.each do |person|
            person.happiness = -1
            expect(person.happiness).to eq(0)
          end
        end
      end

      describe '#hygiene' do
        it 'a person instance is initialized with a hygiene index of 8' do
          people.each { |person| expect(person.hygiene).to eq(8) }
        end

        it 'a person instance can change its hygiene index' do
          people.each do |person|
            person.hygiene = 9
            expect(person.hygiene).to eq(9)
          end
        end

        it "a person instance's hygiene index cannot exceed 10 " do
          people.each do |person|
            person.hygiene = 11
            expect(person.hygiene).to eq(10)
          end
        end

        it ' a person instance hygiene index cannot be less than 0 ' do
          people.each do |person|
            person.hygiene = -1
            expect(person.hygiene).to eq(0)
          end
        end
      end
    end
  end

  context 'non-attribute instance methods' do
    let(:penelope) { Person.new('Penelope') }
    let(:felix) { Person.new('Felix') }
    let(:people) { [penelope, felix] }

    describe '#happy?' do
      it 'returns true if happiness is greater than seven, else false' do
        penelope.happiness = 7
        expect(penelope.happy?).to eq(false)
        penelope.happiness = 8
        expect(penelope.happy?).to eq(true)
      end
    end

    describe '#clean?' do
      it 'returns true if hygiene is greater than seven, else false' do
        penelope.hygiene = 7
        expect(penelope.clean?).to eq(false)
        penelope.hygiene = 8
        expect(penelope.clean?).to eq(true)
      end
    end

    describe '#get_paid' do
      it 'accepts an argument of salary' do
        expect { penelope.get_paid(100) }.to_not raise_error
      end

      it 'increments bank_account by the salary' do
        original_amount = penelope.bank_account
        penelope.get_paid(100)
        expect(penelope.bank_account).to eq(original_amount += 100)
      end

      it "returns 'all about the benjamins'" do
        expect(penelope.get_paid(100)).to eq('all about the benjamins')
      end
    end

    describe '#take_bath' do
      it 'makes the person cleaner by 4 points' do
        penelope.hygiene = 4
        penelope.take_bath
        expect(penelope.hygiene).to eq(8)
      end

      it 'returns a song' do
        penelope.hygiene = 5
        expect(penelope.take_bath).to eq('♪ Rub-a-dub just relaxing in the tub ♫')
      end

      it "can't make a person cleaner by 10 points (hint: use the custom #hygiene= method)" do
        penelope.hygiene = 9
        penelope.take_bath
        expect(penelope.hygiene).to eq(10)
      end

      it 'calls on the #hygiene= method to increment hygiene' do
        penelope.hygiene = 9
        expect(penelope).to receive(:hygiene=).with(13).and_return(10)
        penelope.take_bath
      end
    end

    describe '#work_out' do
      it 'makes the person dirtier by 3 points' do
        penelope.hygiene = 10
        penelope.work_out
        expect(penelope.hygiene).to eq(7)
      end

      it "never makes the person have negative dirty points
        (hint: use the #hygiene= method)" do
        penelope.hygiene = 1
        penelope.work_out
        expect(penelope.hygiene).to be >= 0
        expect(penelope.hygiene).to eq(0)
      end

      it 'calls on the #hygiene= method to decrease hygiene' do
        penelope.hygiene = 1
        expect(penelope).to receive(:hygiene=).with(-2).and_return(0)
        penelope.work_out
      end

      it 'makes the person happier by 2 points' do
        penelope.happiness = 7
        penelope.work_out
        expect(penelope.happiness).to eq(9)
      end

      it "never makes the person have more than 10 happiness points
        (hint: use the #happiness= method)" do
        penelope.happiness = 9
        penelope.work_out
        expect(penelope.happiness).to be <= 10
        expect(penelope.happiness).to eq(10)
      end

      it 'calls on the #happiness= method to increment happiness' do
        penelope.happiness = 9
        expect(penelope).to receive(:happiness=).with(11).and_return(10)
        penelope.work_out
      end

      it 'returns Queen lyrics' do
        penelope.hygiene = 5
        expect(penelope.work_out).to eq('♪ another one bites the dust ♫')
      end
    end

    describe '#call_friend' do
      it 'accepts one argument, an instance of the Person class' do
        expect { penelope.call_friend(felix) }.to_not raise_error
      end

      it 'makes the person calling happier by three points' do
        penelope.happiness = 6
        penelope.call_friend(felix)
        expect(penelope.happiness).to eq(9)
      end

      it 'makes the friend happier by three points' do
        felix.happiness = 5
        penelope.call_friend(felix)
        expect(felix.happiness).to eq(8)
      end

      it "never makes the happiness of either party exceed 10
        (hint: use the cutom #happiness= method)" do
        [felix, penelope].each { |person| person.happiness = 9 }
        penelope.call_friend(felix)
        [felix, penelope].each do |person|
          expect(person.happiness <= 10).to eq(true)
          expect(person.happiness).to eq(10)
        end
      end

      it 'calls on the #happiness= method to increment happiness' do
        [felix, penelope].each { |person| person.happiness = 9 }
        people.each do |person|
          expect(person).to receive(:happiness=).with(12).and_return(10)
        end
        penelope.call_friend(felix)
      end

      it "returns a string that reflects the caller's side of the conversation" do
        { felix => penelope, penelope => felix }.each do |caller, callee|
          convo = "Hi #{callee.name}! It's #{caller.name}. How are you?"
          expect(caller.call_friend(callee)).to eq(convo)
        end
      end
    end

    describe '#start_conversation' do
      it 'accepts two arguments, a person to strike a convo with and a topic' do
        expect { penelope.start_conversation(felix, 'politics') }.to_not raise_error
      end

      context 'topic: politics' do
        it "returns 'blah blah partisan blah lobbyist' if the topic is politics" do
          convo = 'blah blah partisan blah lobbyist'
          expect(penelope.start_conversation(felix, 'politics')).to eq(convo)
        end

        it 'if topic is politics, it makes both people in the convo two points less happy' do
          people.each { |person| person.happiness = 7 }
          penelope.start_conversation(felix, 'politics')
          people.each { |person| expect(person.happiness).to eq(5) }
        end

        it "never makes either party less than 0 points happy (never negative)
          (hint: use your #happiness= method)" do
          people.each { |person| person.happiness = 1 }
          penelope.start_conversation(felix, 'politics')
          people.each do |person|
            expect(person.happiness).to be >= 0
            expect(person.happiness).to eq(0)
          end
        end

        it 'calls on the #happiness= method' do
          [felix, penelope].each { |person| person.happiness = 1 }
          people.each do |person|
            expect(person).to receive(:happiness=).with(-1).and_return(0)
          end
          penelope.start_conversation(felix, 'politics')
        end
      end

      context 'topic: weather' do
        it "returns 'blah blah sun blah rain' if the topic is weather" do
          convo = 'blah blah sun blah rain'
          expect(penelope.start_conversation(felix, 'weather')).to eq(convo)
        end

        it 'if topic is weather, it makes both people in the convo one point more happy' do
          people.each { |p| p.happiness = 7 }
          penelope.start_conversation(felix, 'weather')
          people.each { |p| expect(p.happiness).to eq(8) }
        end

        it "never makes either party more than 10 points happy
          (hint: use your #happiness= method)" do
          people.each { |person| person.happiness = 10 }
          penelope.start_conversation(felix, 'weather')
          people.each do |person|
            expect(person.happiness).to be <= 10
            expect(person.happiness).to eq(10)
          end
        end

        it 'calls on the #happiness= method' do
          [felix, penelope].each { |person| person.happiness = 10 }
          people.each do |person|
            expect(person).to receive(:happiness=).with(11).and_return(10)
          end
          penelope.start_conversation(felix, 'weather')
        end
      end

      context 'topic: other' do
        it "returns 'blah blah blah blah blah' if the topic is not politics or weather" do
          convo = 'blah blah blah blah blah'
          expect(penelope.start_conversation(felix, 'programming')).to eq(convo)
        end

        it "if topic is not politics or weather, it doesn't affect happiness" do
          people.each { |p| p.happiness = 7 }
          penelope.start_conversation(felix, 'other')
          people.each { |p| expect(p.happiness).to eq(7) }
        end
      end
    end
  end
end
