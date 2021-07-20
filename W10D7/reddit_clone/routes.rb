Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "subs#index"
  resources :users, only: [:new, :create, :destroy, :show]

  resource :session, only: [:new, :create, :destroy]

  resources :subs, only: [:new, :create, :edit, :update, :show, :index]

  resources :posts, only: [:new, :create, :edit, :update, :show, :destroy]
end
