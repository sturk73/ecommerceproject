# frozen_string_literal: true

ActiveAdmin.register Product do
  permit_params :name, :product_price, :quantity, :category_id, :description
end
