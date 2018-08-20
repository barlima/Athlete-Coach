class CreateAthletes < ActiveRecord::Migration[5.2]
  def change
    create_table :athletes do |t|
      t.string :name
      t.references :trainer, foreign_key: true

      t.timestamps
    end
  end
end
