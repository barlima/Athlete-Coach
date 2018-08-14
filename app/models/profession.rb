class Profession < ApplicationRecord
  belongs_to :athlete
  has_many :results

  validates :name, presence: true
end
