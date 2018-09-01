class Trainer < ApplicationRecord
  belongs_to :group
  has_many :athletes

  validates :name, presence: true
end
