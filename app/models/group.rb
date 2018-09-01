class Group < ApplicationRecord
  belongs_to :account
  has_one :trainer, dependent: :destroy

  validates :name, presence: true

  accepts_nested_attributes_for :trainer

  after_initialize do
    build_trainer if new_record? && trainer.blank?
  end
end
