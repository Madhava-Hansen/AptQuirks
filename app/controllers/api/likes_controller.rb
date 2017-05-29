class Api::LikesController < ApplicationController

  def create
    debugger
    @like = Like.new(like_params)
    if @like.save
      render 'api/likes/show'
    else
      render @like.errors.full_messages
    end
  end

  def index
    if params[:like][:status]
      @likes = Like.where("id =?", params[:like][:apartment_id]).where("id = ?", params[:like][:user_id])
      debugger
      if @likes
        render 'api/likes/index'
      else
        render @likes.errors.full_messages
      end
    else
      @likes = Like.where("id = ?", params[:apartment_id])
      if @likes
        render 'api/likes/index'
      else
        render @likes.errors.full_messages
      end
    end
  end

  def destroy
    debugger
    @like = Like.find(params[:id])
    if @like
      @like.destroy!
      render 'api/likes/show'
    else
      render @like.errors.full_messages
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :apartment_id)
  end
end
