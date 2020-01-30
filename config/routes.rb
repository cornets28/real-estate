# frozen_string_literal: true

Rails.application.routes.draw do
  root 'home#index'

  # namespace :api do
  #   namespace :v1 do
      resources :signups, only: [:create]
      resources :sessions, only: [:create]
      delete :logout, to: "sessions#logout"
      get :isLogged_in, to: "sessions#isLogged_in"
  #   end
  # end
end
