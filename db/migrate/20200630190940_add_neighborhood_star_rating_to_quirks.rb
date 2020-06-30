class AddNeighborhoodStarRatingToQuirks < ActiveRecord::Migration[5.0]
  def change
    add_column :quirks, :neighborhood_star_rating, :integer
  end
end
