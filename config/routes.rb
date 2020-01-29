# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    namespace :v1 do
      resources :signup, only: [:create]
      resources :sessions, only: [:create]
    end
  end
end
