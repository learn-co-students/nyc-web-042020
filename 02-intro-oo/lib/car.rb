# car = {
#     make: "toyota",
#     model: "camry",
#     serial_number: 1234
# }
# car = {
#     make: "toyota",
#     model: "camry",
#     serial_number: 1234
# }
# car = {
#     make: "toyota",
#     model: "camry",
#     serial_number: 1234
# }
# car = {
#     make: "toyota",
#     model: "camry",
#     serial_number: 1234
# }
# car = {
#     make: "toyota",
#     model: "camry",
#     serial_number: 1234
# }
# car = {
#     make: "toyota",
#     model: "camry",
#     serial_number: 1234
# }
# car = {
#     make: "toyota",
#     model: "camry",
#     serial_number: 1234
# }
# car = {
#     make: "toyota",
#     model: "camry",
#     serial_number: 1234
# }
# car = {
#     make: "toyota",
#     model: "camry",
#     serial_number: 1234
# }
# car = {
#     make: "toyota",
#     model: "camry",
#     serial_number: 1234
# }
# car = {
#     make: "toyota",
#     model: "camry",
#     serial_number: 1234
# }
# car = {
#     make: "toyota",
#     model: "camry",
#     serial_number: 1234
# }


# car2

# def create_car(make, model, sn)
# car = {
#     make: make,
#     model: model,
#     serial_number: sn
# }
# end

# car = create_car


# def turn_on(car)
#     puts "#{make} #{model} is turning on"
# end


require 'pry'

class Car 
    attr_reader :make  
    # attr_writer :model 
    attr_accessor :model
    def initialize(make,model,sn)
        @make = make 
        @model = model
        @sn = sn
    end
    
    
    def make 
        #return the make of the car
        binding.pry
        @make
    end
    # def model 
    #     #return the make of the car
    #     @model
    # end
    # def model=(model)
    #     models = ["camry", "corolla"]
    #     if models.include?(model)
    #         @model = model
    #     else
    #         throw "This is not a toyota model"
    #     end
    # end

end

def muliply_by_two(number)
    number * 2
end
# Car.new
# car.make 

othermethod

car = Car.new("toyota", "camry", 1234)
car.new

binding.pry 

"small steps"