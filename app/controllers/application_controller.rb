class ApplicationController < ActionController::Base
  before_action :authenticate_account!

  protected

  def after_sign_up_path_for(resource)
    new_group_path
  end

  private 

  def get_trainer_id
    current_account.group.trainers.first.id 
  end
end
