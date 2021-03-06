class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :require_login
  helper_method :current_user, :logged_in?

  private
  
  def login!(user)
    @current_user = user
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.try(:reset_session_token!)
    session[:session_token] = nil
  end

  def logged_in?
    !current_user.nil?
  end

  def current_user
    return nil if session[:session_token].nil?
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
  
  def require_login
    unless logged_in?
      redirect_to new_session_url
    end
  end
end
