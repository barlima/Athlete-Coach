class Group < ApplicationRecord
  belongs_to :account
  has_many :trainers
end
