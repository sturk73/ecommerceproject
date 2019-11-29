# frozen_string_literal: true

class ProductsController < ApplicationController
  def index
    @products = Product.all
    render json: @products.with_attached_image
  end

  def product_params
    params.require(:product).permit(:name, :description, :product_price, :quantity, :image)
  end
end
