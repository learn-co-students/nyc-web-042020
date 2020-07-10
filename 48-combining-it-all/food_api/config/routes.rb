Rails.application.routes.draw do
  get "/foods", to: 'foods#index'
  post '/foods', to: 'foods#create'
  delete '/foods/:id', to: 'foods#destroy'
  patch '/foods/:id', to: 'foods#update'
  delete '/user_foods/:id', to: 'user_foods#destroy'

  get '/users/stay_logged_in', to: 'users#stay_logged_in'
  get '/users/:id', to: 'users#show'
  post '/login', to: 'users#login'
  post '/users', to: 'users#create'
  # resources :foods, only: [:index, :create, :destroy, :update]
end
