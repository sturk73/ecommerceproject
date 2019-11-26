# frozen_string_literal: true

class Order < ApplicationRecord
  has one :orders
end
