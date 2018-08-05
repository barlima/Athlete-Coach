class ApplicationController < ActionController::Base
  before_action :authenticate_account!

  protected

  def after_sign_in_path_for(resource)
    new_group_path
  end
end
