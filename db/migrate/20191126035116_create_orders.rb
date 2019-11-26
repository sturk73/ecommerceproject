# frozen_string_literal: true

class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.float :subtotal
      t.float :provincal_tax
      t.float :federal_tax
      t.float :total
      t.date :order_date
      t.references :product, null: false, foreign_key: true
      t.references :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
