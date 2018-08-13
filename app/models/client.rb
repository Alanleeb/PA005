class Client < ApplicationRecord
    has_many :galleries, dependent: :destroy
    has_many :users, through: :galleries
end



