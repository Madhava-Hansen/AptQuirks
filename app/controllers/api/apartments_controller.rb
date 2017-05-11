class Api::ApartmentsController < ApplicationController

  def create
    @apartment = Apartment.new(apartment_params)
    if @apartment.save
      render 'api/apartments/show'
    else
      render @apartment.errors.full_messages
    end
  end

  def show

  end

  def index

  end

  def apartment_params
    params.require(:apartment).permit(:address)
  end
end
