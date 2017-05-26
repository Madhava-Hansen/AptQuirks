class Api::ApartmentsController < ApplicationController

  def create
    @apartment = Apartment.find_by_street_address(params[:apartment][:street_address])
      if @apartment
        render 'api/apartments/show'
      else
        @apartment = Apartment.new(apartment_params)
        if @apartment.save
          render 'api/apartments/show'
        else
          @errors = @apartment.errors.full_messages
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
