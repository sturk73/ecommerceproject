# frozen_string_literal: true

class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :product_price, :description, :quantity, :image

  def image
    return unless object.image.attached?

    object.image.blob.attributes
          .slice('fileame', 'byte_size')
          .merge(url: image_url)
          .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end

  def image_url
    url_for(object.thumbnail)
  end
end
