class RemoveReferenceToTrainingForTrainingGroups < ActiveRecord::Migration[5.2]
  def change
    remove_reference :training_groups, :training, foreign_key: true
  end
end
