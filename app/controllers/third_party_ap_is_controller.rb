class ThirdPartyApIsController < ApplicationController
  def show
    encoded_address = URI.encode(params[:third_party_ap_is][:address])
    lon = params[:third_party_ap_is][:lon]
    lat = params[:third_party_ap_is][:lat]
    if encoded_address && lon && lat
      uri = URI.parse("https://api.walkscore.com/score?format=json&address=#{encoded_address}&lat=#{lat}&lon=#{lon}&transit=1&bike=1&wsapikey=#{'f1901fbff4feac8d83c69793520293d4'}")
      response = Net::HTTP.get_response(uri);
      data = JSON.parse(response.body)
      
      render json: data
    else 
      render json: 'missing address data'
    end
  end

  private 

  def third_party_ap_is_params
    params.require(:third_party_ap_is).permit(:address, :lat, :lon)
  end
end
