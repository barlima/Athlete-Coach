class RemoveTrainingsIdFromAthletes < ActiveRecord::Migration[5.2]
  def change
    remove_column :athletes, :trainings_id
  end
end
