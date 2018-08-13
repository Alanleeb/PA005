class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable


         has_many :galleries, dependent: :destroy
         has_many :clients, through: :galleries
  include DeviseTokenAuth::Concerns::User
end
