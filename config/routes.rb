
  Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :update, :index, :show]
      resources :messages, only: [:create, :destroy, :index, :show]
      resources :conversations, only: [:create, :show, :index, :destroy]
      resource :session, only: [:create, :destroy, :show]
      resources :apartments, only: [:create, :show, :index] do
        resources :quirks, only: [:create, :show, :index, :destroy, :update]
        resources :likes, only: [:create, :destroy, :index]
        resources :images, only: [:create, :index, :show]
      end
    end
    get '/third_party_apis' => "third_party_ap_is#show"
    get '*path' => "static_pages#root"
    root 'static_pages#root'
  end

