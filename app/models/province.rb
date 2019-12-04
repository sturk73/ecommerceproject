# frozen_string_literal: true

class Province < ApplicationRecord
  validates :name, :abbrivation, :pst, presence: true
  validates :name, :abbrivation, uniqueness: true
  validates :pst, numericality: { only_integer: true }
end
