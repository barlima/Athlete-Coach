class Result < ApplicationRecord
  belongs_to :profession

  validates :value, presence: true
end
