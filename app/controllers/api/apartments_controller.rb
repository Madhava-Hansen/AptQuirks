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
    @apartments = Apartment.where(id: params[:apartment][:ids])
    if @apartments
      render 'api/apartments/index'
    else
      @errors = @apartments.errors.full_messages
      render 'api/apartments/errors'
    end
  end

  def show
    @apartment = Apartment.find(params[:apartment][:id])
    if @apartment
      render 'api/apartments/show'
    else
      @errors = @apartment.errors.full_messages
      render 'api/apartments/errors'
    end
  end

  def apartment_params
    params.require(:apartment).permit(:street_address, :lon, :lat, :longitude, :latitude, :ids[], :id)
  end
end
