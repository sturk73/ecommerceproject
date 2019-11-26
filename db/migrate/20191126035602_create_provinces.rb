class CreateProvinces < ActiveRecord::Migration[6.0]
  def change
    create_table :provinces do |t|
      t.string :name
      t.string :abbrivation
      t.int :pst

      t.timestamps
    end
  end
end
