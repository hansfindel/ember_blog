class Api::V1::SessionsController < ApplicationController
	respond_to :json

	def create
		puts params.to_s
		apiKey = params[:apiKey]
		email = params[:email]
		pass = params[:password]
		hash = UserManager.log_in(email, pass)
		puts hash
		respond_with hash, location: nil
	end
end