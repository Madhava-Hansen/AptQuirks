Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :index]
    resources :messages, only: [:create, :destroy, :index, :show]
    resources :conversations, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resources :apartments, only: [:create, :show, :index] do
      resources :quirks, only: [:create, :show, :index, :destroy]
      resources :likes, only: [:create, :destroy, :index]
      resources :images, only: [:create, :index, :show]
    end
  end

  root 'static_pages#root'
end
