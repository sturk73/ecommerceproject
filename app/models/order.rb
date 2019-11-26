# frozen_string_literal: true

class Order < ApplicationRecord
  has_one :orders
  has_many :order_products
  has_many :products, through: :order_products
  belongs_to :customers
end
