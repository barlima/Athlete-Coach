class AthleteTrainingGroup < ApplicationRecord
  belongs_to :athlete
  belongs_to :training_group
end
