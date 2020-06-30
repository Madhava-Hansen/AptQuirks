class AddStarRatingToQuirks < ActiveRecord::Migration[5.0]
  def change
    add_column :quirks, :star_rating, :integer
  end
end
