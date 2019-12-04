# frozen_string_literal: true

class Customer < ApplicationRecord
  belongs_to :province
  has_secure_password
  has_many :orders

  validates :email, :password_digest, :first_name, :last_name, :phone, :address,
            :city, :province_id, presence: true
  validates :email, uniqueness: true
  validates :phone, numericality: { only_integer: true }
end
