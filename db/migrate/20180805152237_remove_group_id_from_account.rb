class RemoveGroupIdFromAccount < ActiveRecord::Migration[5.2]
  def change
    remove_column :accounts, :group_id
  end
end
