# frozen_string_literal: true

class Product < ApplicationRecord
  has_many :order_products
  has_many :orders, through: :order_products
  belongs_to :category
  has_one_attached :image

  def thumbnail
    image.variant(resize: '300x300')
  end

  def fullSize
    image.variant(resize: '800x800')
  end
end
