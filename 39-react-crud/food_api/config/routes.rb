Rails.application.routes.draw do
  get "/foods", to: 'foods#index'
  post '/foods', to: 'foods#create'
  delete '/foods/:id', to: 'foods#destroy'
  patch '/foods/:id', to: 'foods#update'
  # resources :foods, only: [:index, :create, :destroy, :update]
end
