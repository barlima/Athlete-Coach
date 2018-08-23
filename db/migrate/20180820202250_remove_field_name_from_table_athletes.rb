class RemoveFieldNameFromTableAthletes < ActiveRecord::Migration[5.2]
  def change
    remove_column :athletes, :name, :string
  end
end
