# frozen_string_literal: true

class User < ApplicationRecord
  # EMAIL_VALIDATION_WITH_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze
  # validates :email, presence: true, uniqueness: true, format: { with: EMAIL_VALIDATION_WITH_REGEX }
  validates :name, presence: true
  has_secure_password
end
