class Athlete < ApplicationRecord
  belongs_to :trainer
  has_many :professions
  has_many :athlete_training_groups
  has_many :training_groups, through: :athlete_training_groups

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :date_of_birth, presence: true
  validates :sex, presence: true
end
