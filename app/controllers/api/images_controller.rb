class Api::ImagesController < ApplicationController

  def index
    @images = Image.where("apartment_id = ?", image_params[:apartment_id])
    if @images
      render 'api/images/index'
    else
      render json: ["couldn't find images"], status: 404
    end
  end

  def show
    @image = Image.find(params[:id])
    if @image
      render 'api/images/show'
    else
      render json: ["can't find that image"], status: 404
    end
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      render 'api/images/show'
    else
      render json: ["image can't be created"], status: 404
    end

  end

  private

  def image_params
    params.require(:image).permit(:url, :apartment_id, :user_id, :thumbnail_url)
  end
end
