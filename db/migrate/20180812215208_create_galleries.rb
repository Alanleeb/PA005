class CreateGalleries < ActiveRecord::Migration[5.1]
  def change
    create_table :galleries do |t|
      t.string :shoot_name
      t.string :location
      t.references :user, foreign_key: true
      t.references :client, foreign_key: true
      t.float :price
      t.boolean :paid

      t.timestamps
    end
  end
end
