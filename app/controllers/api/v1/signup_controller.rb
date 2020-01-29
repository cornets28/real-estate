# frozen_string_literal: true

class Api::V1::SignupController < ApplicationController
  def create
    # render json: {user: params.permit(:name, :email, :password, :password_confirmation)}
    user = User.new(user_params)

    if user.save
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
