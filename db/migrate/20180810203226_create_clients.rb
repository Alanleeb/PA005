class CreateClients < ActiveRecord::Migration[5.1]
  def change
    create_table :clients do |t|
      t.string :first_name
      t.string :last_name
      t.string :shoot_type
      t.string :locaton
      t.string :notes
      t.users :belongs_to

      t.timestamps
    end
  end
end
