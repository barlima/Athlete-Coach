class AthletesController < ApplicationController
  before_action :authenticate_account

  def show
  end

  private

  def authenticate_account
    athletes = current_account.group.trainer.athletes.map(&:id)
    redirect_to root_path unless athletes.include?(params[:id].to_i)
  end
end
