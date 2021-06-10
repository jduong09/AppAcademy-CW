Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :destroy, :show, :update, :index] do 
    resources :artworks, only: [:index]
    resources :comments, only: [:index]
  end

  resources :artworks, only: [:create, :destroy, :show, :update] do
    resources :comments, only: [:index]
    member do 
      post :like, to: "artworks#like", as: "like"
      post :unlike, to: "artworks#unlike", as: "unlike"
      post :favorite, to: "artworks#favorite", as: "favorite"
      post :unfavorite, to: "artworks#unfavorite", as: "unfavorite"
    end
  end

  resources :artwork_shares, only: [:create, :destroy] do 
    member do 
      post :favorite, to: "artwork_shares#favorite", as: "favorite"
      post :unfavorite, to: "artwork_shares#unfavorite", as: "unfavorite"
    end
  end

  resources :comments, only: [:index, :create, :destroy] do
    member do 
      post :like, to: "comments#like", as: "like"
      post :unlike, to: "comments#unlike", as: "unlike"
    end
  end

end
