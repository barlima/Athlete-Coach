class AddTrainerReferencesToTrainingGroup < ActiveRecord::Migration[5.2]
  def change
    add_reference :training_groups, :trainer, foreign_key: true
  end
end
