require 'pry'
class Person
    attr_reader :name, :happiness, :hygiene
    attr_accessor :bank_account
    @@all = []
    def initialize(name = nil)
        @name = name
        @bank_account = 25
        @happiness = 8
        @hygiene = 8
        Person.all << self
        
    end

    def happiness=(num)
        if num > 10
            @happiness = 10 
        elsif num < 0
            @happiness = 0
        else
            @happiness = num 
        end
    end

    def self.all 
        @@all
    end

    def self.all_name
        self.all.uniq.each do |person_inst|
            puts person_inst.name
        end
    end

    def hygiene 
        @hygiene
    end

    def hygiene=(num)
         if num > 10
            @hygiene = 10 
        elsif num < 0
            @hygiene = 0
        else
            @hygiene = num 
        end
    end

    def clean?
        @hygiene > 7
    end

    # @hygiene = 9


    def work_out
        self.hygiene=(@hygiene-3)
        self.happiness=(@happiness+2)

        take_bath
        '♪ another one bites the dust ♫'
    end

    private

    def take_bath
        # add 4 to hygiene
        # self.hygiene= @hygiene + 4

        # 9 = 9+4 => @hygiene = 13
        # newHygiene = @hygiene + 4
    #    @hygiene = 13
        
       self.hygiene=(@hygiene + 4)

        # implicit self
    #    hygiene=(newHygiene)
    '♪ Rub-a-dub just relaxing in the tub ♫'
    end


end


# person.take_bath

binding.pry

# Person.new => run our initialize

# # person.bank_account 
# person.bank_account=25


# # didn't initialize bank_account
#     # 





# class Car 

#     def make
#         self
#     end
#     def model

#     end
#     def turn_on
#         puts "#{@model}"
#         self
#     end

    
#     def self.all
#         self => the object that is doing the thing
#     end
# end

# myself = "Tashawn"

# def myself 
#     myself = "Tashawn"
#     self
# end

# def method
#     createVariable = "Some variable"
#     myself


#     self 

#     createVariable
# end




# [].count 
# [].send(:count) => self == []

# Car.all => Car.send(:all) => self == Car