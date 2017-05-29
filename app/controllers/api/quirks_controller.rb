class Api::QuirksController < ApplicationController

  def create
    @quirk = Quirk.new(quirk_params)
    if @quirk.save
      render 'api/quirks/show'
    else
      render @quirk.errors.full_messages
    end
  end

  def destroy
    @quirk = Quirk.find(params[:id])
    if @quirk
      @quirk.destroy!
      render 'api/quirks/show'
    else
      render 'api/quirks/errors'
    end
  end

  def index
    @quirks = Quirk.all.where("apartment_id = ?", params[:apartment_id])
    if @quirks
      render 'api/quirks/index'
    else
      render json: ["quirk index load error"], statu: 401
    end
  end

  private

  def quirk_params
    params.require(:quirk).permit(:title, :body, :apartment_id, :user_id, :apt_number)
  end

end
