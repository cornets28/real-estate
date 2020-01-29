# frozen_string_literal: true

class Api::V1::SessionsController < ApplicationController
  def create
    user = User.find_by(email: params['session']['email'])

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
      }
    else
      render json: { status: 401, errors: 'Invalid credentials' }
    end
  end
end
