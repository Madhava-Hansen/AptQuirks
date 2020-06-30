class AddLandlordStarRatingToQuirks < ActiveRecord::Migration[5.0]
  def change
    add_column :quirks, :landlord_star_rating, :integer
  end
end
