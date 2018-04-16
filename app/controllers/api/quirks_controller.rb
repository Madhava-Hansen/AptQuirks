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
    @quirks = Quirk.where("apartment_id = ?", params[:apartment_id])
    if @quirks
      render 'api/quirks/index'
    else
      render json: @quirks.errors.full_messages
    end
  end

  private

  def quirk_params
    params.require(:quirk).permit(:title, :body, :apartment_id, :user_id, :apt_number, :user_name, :user_pic)
  end

end
