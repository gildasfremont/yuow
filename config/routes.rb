Rails.application.routes.draw do
  root 'home#index'
  resources :links, only: [:create]
  get '/pay/:id', to: 'payments#show'
end
