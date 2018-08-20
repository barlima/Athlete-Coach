class StaticPagesController < ApplicationController

  skip_before_action :authenticate_account!

  def home
    if current_account && current_account.group
      @trainer_id = get_trainer_id
      redirect_to trainer_path(@trainer_id)
    end
  end

  def help
  end

  def about
  end
end
