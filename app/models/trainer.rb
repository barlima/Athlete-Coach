class Trainer < ApplicationRecord
  belongs_to :group
  has_many :athletes
  has_many :training_groups
  has_many :trainings, through: :training_groups

  validates :name, presence: true
end
