class Account < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_one :group, dependent: :destroy

  accepts_nested_attributes_for :group

  after_initialize do
    build_group if new_record? && group.blank?
  end
end
