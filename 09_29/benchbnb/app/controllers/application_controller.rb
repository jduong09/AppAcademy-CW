class ApplicationController < ActionController::Base

  #make these mthods available within the views
  helper_method :current_user, :logged_in?

  def login!(user)
    @user = user
    session[:session_token] = user.session_token
  end

  def logout!
    #scramble the current user's session_token
    current_user.reset_session_token!

    # reset the session
    session[:session_token] = nil
  end

  def current_user
    return nil unless session[:session_token]

    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !current_user.nil?
  end
end
