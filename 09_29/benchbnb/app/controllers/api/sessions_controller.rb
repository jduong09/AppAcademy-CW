class Api::SessionsController < ApplicationController
  protect_from_forgery except: [:create, :destroy]
  #login
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user.nil?
      render json: ['Invalid username or password.'], status: 422
    else
      login!(@user)
      render 'api/users/show'
    end
  end

  #logout
  def destroy
    if !current_user
      render json: [ 'No one is logged in' ], status: 404
    else 
      logout!
      render json: [ 'Logout Successful' ]
    end
  end
end