class ThirdPartyApIsController < ApplicationController
  def show
    debugger
  end

  private 

  def third_party_ap_is_params
    params.require(:third_party_ap_is).permit(:address)
  end
end
