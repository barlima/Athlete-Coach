class AddTrainingParamToTrainings < ActiveRecord::Migration[5.2]
  def change
    add_column :trainings, :training_param, :string
  end
end
