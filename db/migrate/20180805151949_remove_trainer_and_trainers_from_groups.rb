class RemoveTrainerAndTrainersFromGroups < ActiveRecord::Migration[5.2]
  def change
    remove_column :groups, :trainer_id
    remove_column :groups, :trainers_id 
  end
end
