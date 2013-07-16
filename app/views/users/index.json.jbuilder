json.array!(@users) do |user|
  json.extract! user, :username, :email, :password_salt, :password_hash
  json.url user_url(user, format: :json)
end