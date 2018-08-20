class CreateResults < ActiveRecord::Migration[5.2]
  def change
    create_table :results do |t|
      t.string :value
      t.references :profession, foreign_key: true

      t.timestamps
    end
  end
end
