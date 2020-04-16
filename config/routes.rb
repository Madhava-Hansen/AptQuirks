
  Rails.application.routes.draw do
    namespace :api, defaults: {format: :json} do
      resources :users, only: [:create, :update, :index]
      resources :messages, only: [:create, :destroy, :index, :show]
      resources :conversations, only: [:create, :show, :index, :destroy]
      resource :session, only: [:create, :destroy, :show]
      resources :apartments, only: [:create, :show, :index] do
        resources :quirks, only: [:create, :show, :index, :destroy]
        resources :likes, only: [:create, :destroy, :index]
        resources :images, only: [:create, :index, :show]
      end
    end
    get '/home' => "static_pages#root"
    get '/profile' => "static_pages#root"
    get '/inbox' => "static_pages#root"
    get '/login' => "static_pages#root"
    get '/signup' => "static_pages#root"
    get '/apartments/:id' => "static_pages#root"
    get '/addquirk/:id' => "static_pages#root"
    get '/messages/:id' => "static_pages#root"
    get '/compose' => "static_pages#root"
    root 'static_pages#root'
  end

