# frozen_string_literal: true

class OrderStatus < ApplicationRecord
  has_one :order_statuses
end
