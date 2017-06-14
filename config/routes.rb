Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update] do
      resources :messages, only: [:create, :destroy, :index]
      resources :conversations, only: [:create, :show, :index]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :apartments, only: [:create, :show, :index] do
      resources :quirks, only: [:create, :show, :index, :destroy]
      resources :likes, only: [:create, :destroy, :index]
    end
  end

  root 'static_pages#root'
end
