class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      UserMailer.welcome_email(@user).deliver_now
      render 'api/users/show'
    else
      render json: ["Invalid username or password, please try again"], status: 401
    end
  end

  def show
    @user = User.where("username = ?", params[:user][:username])
    if @user
      render 'api/users/show'
    else
      render json: ['unable to find user'], status: 401
    end
  end

  def update
    @user = current_user
    if @user
      @user.update_attributes(user_params)
      render 'api/users/show'
    else
      render json: ["unable to update user"], status: 401
    end
  end

  def index
    @users = User.where("username ~ ?", params[:user][:username]).limit(5)
    if @users
      render 'api/users/index'
    else
      render json: ["no users with that username"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :url, :thumbnail_url, :id, :city)
  end
end
