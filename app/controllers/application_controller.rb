# frozen_string_literal: true

class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token
end

# --request POST \
# --data '{"user": {"name": "Samuel", "email": "cor@gmail.com", "password": "12345"}}' \
# http:localhost:3000/sessions
# curl --header "Content-Type; application/json --request POST --data '{"user": {"name": "Samuel", "e
# mail": "cor@gmail.com", "password": "12345"}}'
