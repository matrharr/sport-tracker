class Team < ApplicationRecord
  has_and_belongs_to_many :users
  belongs_to :sport
end
