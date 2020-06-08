class TrainersController < ApplicationController
  def index
    @trainers = Trainer.all
    render json: @trainers
  end
end
