class TrainingsController < ApplicationController
  before_action :get_date
  
  def new
    @trainer_id = current_account.group.trainer.id
    # ToDo: get groups
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
