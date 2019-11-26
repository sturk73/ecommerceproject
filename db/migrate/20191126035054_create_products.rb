class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.float :product_price
      t.int :quantity

      t.timestamps
    end
  end
end
