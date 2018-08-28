class ApplicationController < ActionController::Base
  before_action :authenticate_account!
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def after_sign_up_path_for(resource)
    new_group_path
  end

  private 

  def get_trainer_id
    current_account.group.trainer.id 
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [{ group_attributes: :name }])
  end
end
