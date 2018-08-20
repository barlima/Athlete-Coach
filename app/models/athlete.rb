class Athlete < ApplicationRecord
  belongs_to :trainer
  has_many :professions

  validates :name, presence: true
end
