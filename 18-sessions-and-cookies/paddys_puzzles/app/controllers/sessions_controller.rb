class SessionsController < ApplicationController
  def reset_session
    session[:page_counter] = 0

    redirect_back fallback_location: drinks_path
  end 
end 