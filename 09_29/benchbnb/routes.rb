Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    #signup
    resources :users, only: [:create]
    #login/logout
    resource :session, only: [:create, :destroy]

    resources :benches, only: [:create, :index] do
      resources :reviews, only: [:index]
    end

    resources :reviews, only: [:create]
  end
end
