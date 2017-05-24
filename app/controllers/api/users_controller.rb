class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      render 'api/users/show'
    else
      @errors = @user.errors.full_messages
      debugger
      render 'api/users/errors'
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
