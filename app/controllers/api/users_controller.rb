class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid username or password, please try again"], status: 404
    end
  end

  def update
    @user = User.find(params[:user][:id])
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :url, :thumbnail_url)
  end
end
