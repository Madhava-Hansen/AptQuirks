class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      render 'api/likes/show'
    else
      @errors = @like.errors.full_messages
      render 'api/likes/errors'
    end
  end

  def index
      @likes = Like.where("apartment_id = ?", params[:apartment_id])
      if @likes
        render 'api/likes/index'
      else
        @errors = @likes.errors.full_messages
        render 'api/likes/errors'
      end
  end

  def destroy
    @like = Like.find(params[:like][:id])
    if @like
      @like.destroy!
      render 'api/likes/show'
    else
      @errors = @like.errors.full_messages
      render 'api/likes/errors'
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :apartment_id, :id)
  end
end
