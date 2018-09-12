class AddTrainingIdToTrainingGroups < ActiveRecord::Migration[5.2]
  def change
    add_column :training_groups, :training_id, :integer
  end
end
