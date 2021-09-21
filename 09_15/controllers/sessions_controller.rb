class SessionsController < ApplicationController
  skip_before_action :require_login
  
  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user.nil?
      render :new
    else
      login!(@user)
      redirect_to root_url
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end

end