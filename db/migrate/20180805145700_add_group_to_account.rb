class AddGroupToAccount < ActiveRecord::Migration[5.2]
  def change
    add_reference :accounts, :group, foreign_key: true
  end
end
