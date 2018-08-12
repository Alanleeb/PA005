class CreateGalleries < ActiveRecord::Migration[5.1]
  def change
    create_table :galleries do |t|
      t.string :shoot_name
      t.string :location
      t.users :belongs_to
      t.client :belongs_to
      t.float :price
      t.boolean :paid

      t.timestamps
    end
  end
end
