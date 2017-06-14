# == Schema Information
#
# Table name: quirks
#
#  id           :integer          not null, primary key
#  title        :string           not null
#  body         :string           not null
#  apartment_id :integer          not null
#  user_id      :integer          not null
#  apt_number   :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_name    :string
#

require 'test_helper'

class QuirkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
