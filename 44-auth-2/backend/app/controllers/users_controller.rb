class UsersController < ApplicationController
  before_action :authorized, only: [:stay_logged_in]

    def show
        @user = User.find(params[:id])
        render json: @user
    end

    def login
      @user = User.find_by(username: params[:username])
      if @user && @user.authenticate(params[:password])
        wristband = encode_token({user_id: @user.id})
        render json: {
          user: UserSerializer.new(@user),
          token: wristband
        }
      else
        render json: {error: "You messed up."}
      end
    end

    def stay_logged_in
      wristband = encode_token({user_id: @user.id})
      render json: {
        user: UserSerializer.new(@user),
        token: wristband
      }
    end

    def create
      @user = User.create(user_params)
      if @user.valid?
        wristband = encode_token({user_id: @user.id})
        render json: {
          user: UserSerializer.new(@user),
          token: wristband
        }
      else
        render json: {error: "A user with that username exists"}
      end

    end

    private

    def user_params
      params.permit(:username, :password)
    end

end
