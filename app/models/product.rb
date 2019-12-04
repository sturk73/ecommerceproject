# frozen_string_literal: true

class Product < ApplicationRecord
  has_many :order_products
  has_many :orders, through: :order_products
  belongs_to :category
  has_one_attached :image

  validates :name, :product_price, :quantity, :description,
            :category_id, presence: true
  validates :name, uniqueness: true
  validates :product_price, numericality: { only_integer: false }
  validates :quantity, numericality: { only_integer: true }

  def thumbnail
    image.variant(resize: '300x300')
  end

  def full_size
    image.variant(resize: '800x800')
  end
end
