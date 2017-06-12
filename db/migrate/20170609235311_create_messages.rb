class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :conversation_id, null: false
      t.integer :sender_id, null: false
      t.text :body, null: false
      t.boolean :read, null: false, default: false
      
      t.timestamps
    end
  end
end
