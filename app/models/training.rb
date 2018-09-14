class Training < ApplicationRecord
  belongs_to :trainer
  has_many :training_groups
  has_many :training_details
end
