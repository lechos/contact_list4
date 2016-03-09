class Contacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone
      t.string :email
      t.timestamps :created_at, null: false
      t.timestamps :updated_at, null: false
    end
  end
end


{
  contacts: [
    {
      id: 0,
      first_name: "Hello",
        last_name: "World",
    },
    {
      id: 1,

    }
  ]
}


