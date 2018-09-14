class CreateTrainingDetails < ActiveRecord::Migration[5.2]
  def change
    create_table :training_details do |t|
      t.references :training, foreign_key: true
      t.references :training_group, foreign_key: true

      t.timestamps
    end
  end
end
