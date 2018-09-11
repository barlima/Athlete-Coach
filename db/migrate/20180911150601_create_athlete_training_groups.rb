class CreateAthleteTrainingGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :athlete_training_groups do |t|
      t.integer :athlete_id
      t.integer :training_group_id

      t.timestamps
    end

    add_index :athlete_training_groups, [:athlete_id, :training_group_id], name: 'athlete_training_group'
  end
end
