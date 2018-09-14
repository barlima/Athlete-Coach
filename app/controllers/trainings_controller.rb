class TrainingsController < ApplicationController
  before_action :get_date
  
  def new
    @trainer = current_account.group.trainer
    @trainer_id = @trainer.id
    @trainings = @trainer.trainings
  end

  def edit
  end

  private

  def get_date
    redner trainings_path unless params[:date]
    @date = params[:date].split('_').map(&:to_i)
    @date = Date.new(*@date[0..2])
  end
end
