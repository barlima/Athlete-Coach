class StaticPagesController < ApplicationController

  skip_before_action :authenticate_account!

  def home
    @trainer_id = get_trainer_id if current_account
  end

  def help
  end

  def about
  end
end
