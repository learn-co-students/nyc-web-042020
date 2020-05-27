class ApplicationController < ActionController::Base
  before_action :set_user
  before_action :authorized

  def set_user
    @logged_in_user = User.find_by(id: session[:user_id])
  end 

  def authorized
    if @logged_in_user
      # do whatever they were trying to do
    else
      flash[:error] = "Gotta Log In Homie"
      redirect_to new_login_path
    end 
  end
end
