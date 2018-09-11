class AddTrainingIdToTrainingGroups < ActiveRecord::Migration[5.2]
  def change
    add_reference :training_groups, :training, foreign_key: true
  end
end
