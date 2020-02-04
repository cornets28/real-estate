# frozen_string_literal: true

class SignupsController < ApplicationController
  def create
    # render json: {user: params.permit(:name, :email, :password, :password_confirmation)}
    # user = User.create(user_params)
    user = User.create!(
      name: params['user']['name'],
      email: params['user']['email'],
      password: params['user']['password'],
      password_confirmation: params['user']['password_confirmation']
    )

    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
      }
    else
      render json: { status: 500, errors: user.errors.full_messages }
    end
  end

  private

  def user_params
    params.permit(:name, :email, :password, :password_confirmation)
  end
end
