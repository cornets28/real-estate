# frozen_string_literal: true

class SessionsController < ApplicationController
  include CurrentUserConcern

  def create
    user = User
           .find_by(email: params['user']['email'])
           .try(:authenticate, params['user']['password'])

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        isLogged_in: true,
        user: user
      }
    else
      render json: { status: 401, errors: 'Wrong credentials' }
    end
  end

  def isLogged_in
    if @current_user
      render json: {
        isLogged_in: true,
        user: @current_user
      }
    else
      render json: {
        isLogged_in: false
      }
    end
  end

  def logout
    reset_session
    render json: { status: 200, logged_out: true }
  end
end
