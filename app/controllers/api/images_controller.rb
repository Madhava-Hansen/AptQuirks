class Api::ImagesController < ApplicationController

  def index
    @images = Image.all
    if @images
      render 'api/images/index'
    else
      render json: ["couldn't find images"], status: 401
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
      render json: ["image can't be created"], status: 401
    end

  end

  private

  def image_params
    params.require(:image).permit(:url)
  end
end
