class SessionsController < ApplicationController
  skip_before_action :require_login, only: [:new, :create]
  layout "auth", only: [:new]
  
  #New template is place for user to sign in
  def new
    render :new
  end

  #Create will create a session for the user, logging in the user so they can have their personalized information
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user.nil?
      render :new
    else
      #Login! will pass a session_token to the user
      login!(@user)
      #Redirect to the user's showpage.
      redirect_to user_url(@user)
    end
  end

  #Destroy will logout the user, redirecting the user to the sign in
  def destroy
    logout!
    redirect_to new_session_url
  end
end