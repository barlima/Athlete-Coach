class AddParamsToAthletes < ActiveRecord::Migration[5.2]
  def change
    add_column :athletes, :first_name, :string
    add_column :athletes, :last_name, :string
    add_column :athletes, :date_of_birth, :date
  end
end
