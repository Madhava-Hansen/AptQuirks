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
          render json: @apartment.errors.full_messages, status: 404
        end
    end
  end

  def index
    @apartments = Apartment.where(id: (params[:apartment][:id]).split(""))
    if @apartments
      render 'api/apartments/index'
    else
      render json: @apartments.errors.full_messages, status: 404
    end
  end

  def show
    @apartment = Apartment.find(params[:apartment][:id])
    if @apartment
      render 'api/apartments/show'
    else
      render json: @apartment.errors.full_messages, status: 404
    end
  end

  private

  def apartment_params
    params.require(:apartment).permit(:street_address, :lon, :lat, :longitude, :latitude, :id)
  end
end
