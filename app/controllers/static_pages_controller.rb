class StaticPagesController < ApplicationController

  skip_before_action :authenticate_account!

  def home
  end

  def help
  end

  def about
  end
end
