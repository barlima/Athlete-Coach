class AddSexToAthletes < ActiveRecord::Migration[5.2]
  def change
    add_column :athletes, :sex, :string
  end
end
