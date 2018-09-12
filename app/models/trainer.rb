class Trainer < ApplicationRecord
  belongs_to :group
  has_many :athletes
  has_many :training_groups

  validates :name, presence: true
end
