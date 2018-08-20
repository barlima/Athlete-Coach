class TrainersController < ApplicationController
  def edit
  end

  def show
    @trainer_id = get_trainer_id
  end
end
