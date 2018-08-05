class GroupsController < ApplicationController

  before_action :redirect_group_recreate, only: :new

  def new
    @group = Group.new
    @group.trainers.build
  end

  def create
    @group = current_account.create_group(group_params)
    if @group.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit

  end

  def update

  end

  private

  def group_params
    params.require(:group).permit(:name, trainers_attributes: [:name])
  end

  def redirect_group_recreate
    if current_account.group
      redirect_to edit_group_path(current_account.group.id)
    end
  end

end
