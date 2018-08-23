Rails.application.routes.draw do

  root to: 'static_pages#home'

  get '/home',  to: 'static_pages#home'
  get '/help',  to: 'static_pages#help'
  get '/about', to: 'static_pages#about'

  get '/trainer',      to: 'trainers#show'
  get '/edit_trainer', to: 'trainers#edit'

  resources :groups, except: %i(show destroy index)

  devise_for :accounts

  # ### GraphQL ###

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  
  post "/graphql", to: "graphql#execute"

  # ### GraphQL ###
end
