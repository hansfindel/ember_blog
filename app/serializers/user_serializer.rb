class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_salt, :password_hash
end
