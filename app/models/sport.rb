class Sport < ApplicationRecord
  has_and_belongs_to_many :users
  has_many :teams
  has_many :activities
end
