# == Schema Information
#
# Table name: apartments
#
#  id             :integer          not null, primary key
#  street_address :string           not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  lat            :integer          not null
#  lon            :integer          not null
#  longitude      :float
#  latitude       :float            not null
#

require 'test_helper'

class ApartmentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
