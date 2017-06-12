class AddThumbnailUrlToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :thumbnail_url, :string
  end
end
