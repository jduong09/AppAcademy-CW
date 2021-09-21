class UsersController < ApplicationController
  skip_before_action :require_login

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to new_session_url
    else
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end