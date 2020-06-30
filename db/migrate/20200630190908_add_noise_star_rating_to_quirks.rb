class AddNoiseStarRatingToQuirks < ActiveRecord::Migration[5.0]
  def change
    add_column :quirks, :noise_star_rating, :integer
  end
end
