class Api::ApartmentsController < ApplicationController

  def create
    debugger
    @apartment = Apartment.find_by_street_address(params[:apartment][:street_address])
      if @apartment
        debugger
        render 'api/apartments/show'
      else
        debugger
        @apartment = Apartment.new(apartment_params)
        if @apartment.save
          debugger
          render 'api/apartments/show'
        else
          @errors = @apartment.errors.full_messages
          debugger
          render 'api/apartments/errors'
        end
    end
  end

  def index
    @apartments = Apartment.all
  end

  def apartment_params
    params.require(:apartment).permit(:street_address, :lon, :lat, :longitude, :latitude)
  end
end
