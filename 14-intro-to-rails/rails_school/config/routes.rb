Rails.application.routes.draw do
  # resources :students
                 #controller#method       
  get '/students', to: 'students#index', as: 'students'
  get '/students/:id', to: 'students#show', as: 'student'
  get '/students/:id/edit', to: 'students#edit', as: 'edit_student'
  get '/students/new', to: 'students#new', as: 'new_student'

  post '/students', to: 'students#create'
  patch '/students/:id', to: 'students#update'
  delete '/students/:id', to: 'students#destroy'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
