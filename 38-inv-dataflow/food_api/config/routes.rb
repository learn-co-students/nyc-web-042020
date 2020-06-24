Rails.application.routes.draw do
  get "/foods", to: 'foods#index'
  post '/foods', to: 'foods#create'
  # resources :foods, only: [:index, :create]
end
