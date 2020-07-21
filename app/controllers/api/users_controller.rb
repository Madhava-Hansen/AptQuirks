class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      if !@user.email 
        @user.email = "Madhavah@gmail.com"
      end
      WelcomeUserMailer.welcome_email(@user).deliver_now
      render 'api/users/show'
    end
  end

  def show
    @user = User.find_by_username(params[:user][:username])
    if @user
      if !@user.email
        @user.email = "Madhavah@gmail.com"
      end
      render 'api/users/show'
    else
      render json: ['user does not exist'], status: 204
    end
  end

  def update
    @user = current_user
    if @user
      @user.update_attributes(user_params)
      if !@user.email
        @user.email = "Madhavah@gmail.com"
      end
      render 'api/users/show'
    else
      render json: ["unable to update user"], status: 401
    end
  end

  def index
    # if current_user && current_user.username === ENV['ADMIN_USERNAME']
    if true
      @users = User.all
      render 'api/users/index'
    else 
      if params[:user][:username] == ""
        limit = 0
      else 
        limit = 6
      end
      @users = User.where("username ~ ?", params[:user][:username]).limit(limit)
      if @users
        render 'api/users/index'
      else
        render json: ["no users with that username"], status: 404
      end
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :url, :thumbnail_url, :id, :city, :isSweepstakes)
  end
end
