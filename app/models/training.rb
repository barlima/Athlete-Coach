class Training < ApplicationRecord
  belongs_to :trainer
  has_many :training_group
end
