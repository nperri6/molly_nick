class CreateGuests < ActiveRecord::Migration
  def change
    create_table :guests do |t|
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.string :attending, null: false

      t.timestamps null: false
    end
  end
end
