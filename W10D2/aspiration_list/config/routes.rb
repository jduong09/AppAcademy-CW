Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create, :show] do 
    resources :goals, only: [:new, :show, :edit, :update, :index]
  end

  resource :session, only: [:new, :create, :destroy]

  resources :goals, only: [:create, :destroy]
end
