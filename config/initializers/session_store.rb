if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_real-estate", domain: "real-state-api.herokuapp.com"
else 
  Rails.application.config.session_store :cookie_store, key: "_real-estate"
end


