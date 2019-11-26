class CreateOrderStatuses < ActiveRecord::Migration[6.0]
  def change
    create_table :order_statuses do |t|
      t.string :status
      t.date :updated_date

      t.timestamps
    end
  end
end
