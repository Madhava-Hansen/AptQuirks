require 'net/https'

class ApplicationController < ActionController::Base
  RECAPTCHA_MINIMUM_SCORE = 0.5
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def verify_recaptcha?(response)
    secret_key = ENV['captcha_secret_key']
    uri = URI.parse("https://www.google.com/recaptcha/api/siteverify?secret=#{secret_key}&response=#{response}")
    response = Net::HTTP.get_response(uri)
    json = JSON.parse(response.body)

    json['success']
  end

  def current_user
    return nil unless session[:session_token]
    @current_user = User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout
    user = current_user
    user.reset_session_token!
    session[:session_token] = nil
  end

  def ensure_logged_in
    if !logged_in?
      redirect 'api/static_pages/root'
    end
  end

  def logged_in?
    !!current_user
  end

end
