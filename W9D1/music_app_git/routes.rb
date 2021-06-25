Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:show, :create, :new]

  resource :session, only: [:create, :new, :destroy]

  resources :bands, only: [:show, :index, :create, :new, :update, :destroy, :edit] do
    resources :albums, only: [:new]
  end

  resources :albums, only: [:create, :show, :edit, :destroy, :update] do
    resources :tracks, only: [:new]
  end

  resources :tracks, only: [:create, :show, :edit, :destroy, :update] do
    resources :notes, only: [:new, :edit]
  end

  resources :notes, only: [:destroy, :create, :update]
end
