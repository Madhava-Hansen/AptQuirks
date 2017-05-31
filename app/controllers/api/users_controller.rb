class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      render 'api/users/show'
    else
      render json: ["Invalid username or password, please try again"], status: 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
