Rails.application.routes.draw do
  get '/users/stay_logged_in', to: 'users#stay_logged_in'
  post '/snacks', to: 'snacks#create'
  get '/users/:id', to: 'users#show'
  post '/login', to: 'users#login'
  post '/users', to: 'users#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
