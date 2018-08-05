class Group < ApplicationRecord
  belongs_to :account
  has_many :trainers

  validates :name, presence: true

  accepts_nested_attributes_for :trainers
end
