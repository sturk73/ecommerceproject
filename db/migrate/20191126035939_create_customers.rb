class CreateCustomers < ActiveRecord::Migration[6.0]
  def change
    create_table :customers do |t|
      t.string :email
      t.string :password_digest
      t.string :first_name
      t.string :last_name
      t.int :phone
      t.string :address
      t.string :city
      t.references :province, null: false, foreign_key: true

      t.timestamps
    end
    add_index :customers, :email, unique: true
  end
end
