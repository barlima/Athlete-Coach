class TrainingGroup < ApplicationRecord
  belongs_to :trainer
  belongs_to :training
  has_one :training_detail
  has_many :athlete_training_groups
  has_many :athletes, through: :athlete_training_groups

  validate :has_unique_athletes

  private

  def has_unique_athletes
    if athletes
      athletes.map(&:id) == athletes.map(&:id).uniq
    else
      true
    end
  end
end
