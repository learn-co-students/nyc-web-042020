class ApplicationController < ActionController::API

  def encode_token(payload)
   # should store secret in env variable
   JWT.encode(payload, 'alphabet_soup')
 end




 def auth_header
   # { Authorization: 'Bearer <token>' }
   request.headers['Authorization']
 end

 def decoded_token
   if auth_header
     token = auth_header
     # header: { 'Authorization': 'Bearer <token>' }
     begin
       JWT.decode(token, 'alphabet_soup', true, algorithm: 'HS256')
     rescue JWT::DecodeError
       nil
     end
   end
 end

 def logged_in_user
   if decoded_token
     user_id = decoded_token[0]['user_id']
     @user = User.find_by(id: user_id)
   end
 end

 def logged_in?
   !!logged_in_user
 end

 def authorized
   render json: { error: 'Please log in' }, status: :unauthorized unless logged_in?
 end

end
