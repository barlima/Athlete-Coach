class Group < ApplicationRecord
  belongs_to :account
  has_one :trainer, dependent: :destroy

  validates :name, presence: true

  accepts_nested_attributes_for :trainer
end
