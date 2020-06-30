class Api::QuirksController < ApplicationController

  def create
    @quirk = Quirk.new(quirk_params)
    if @quirk.save
      render 'api/quirks/show'
    else
      render json: @quirk.errors.full_messages
    end
  end

  def destroy
    @quirk = Quirk.find(params[:id])
    if @quirk
      @quirk.destroy!
      render 'api/quirks/show'
    else
      render json: @quirk.errors.full_messages
    end
  end

  def index
    quirks = Quirk.where("apartment_id = ?", params[:apartment_id])
    @quirks = quirks.sort_by &:created_at
    if @quirks
      render 'api/quirks/index'
    else
      render json: @quirks.errors.full_messages
    end
  end

  def update 
    @quirk = Quirk.find_by_id(params[:quirk][:id])
    if @quirk
      @quirk.update_attributes(quirk_params)
      render json: ['Successfully updated quirk'], status: 200
    else
      render json: ["unable to update quirk"], status: 401
    end
  end

  private

  def quirk_params
    params.require(:quirk).permit(:id, :title, :body, :apartment_id, :user_id, :apt_number, :user_name, :user_pic, :star_rating)
  end

end
