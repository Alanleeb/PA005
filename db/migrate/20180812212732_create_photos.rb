class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.string :name
      t.string :image
      t.gallery :belongs_to

      t.timestamps
    end
  end
end
