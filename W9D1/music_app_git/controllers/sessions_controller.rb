class SessionsController < ApplicationController
  skip_before_action :require_login, only: [:new, :create]
  def new
    render :new
  end

  #SessionsController
  #create should re-set the appropriate user's 
  #session_token and session[:session_token].
  #log_in
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user.nil?
      render :new
    else
      login!(user)
      redirect_to user_url(user)
    end
  end

  #log_out
  def destroy
    logout!
    redirect_to new_session_url
  end
end