Rails.application.routes.draw do

  root to: 'static_pages#home'

  get '/home', to: 'static_pages#home'
  get '/help', to: 'static_pages#help'
  get '/about', to: 'static_pages#about'

  resources :trainers, only: %i(edit)
  resources :groups, except: %i(show destroy index)

  devise_for :accounts
end
