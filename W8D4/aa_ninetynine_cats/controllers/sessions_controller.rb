class SessionsController < ApplicationController
  before_action :require_current_user!, except: [:create, :new]

  def new
    render :new
  end

  def create
    #Log_in
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user.nil?
      render :new
    else
      login!(user)
      redirect_to user_url(user)
    end
  end

  def destroy
    #Log_out
    logout!
    redirect_to new_session_url
  end

end