class Api::V1::SessionsController < ApplicationController
	respond_to :json

	def create
		#puts params.to_s #just for dev
		apiKey = params[:apiKey]
		if APIController.validate_registered_app(apiKey)
			email = params[:email]
			pass = params[:password]
			hash = UserManager.log_in(email, pass)
			puts hash
		else
			hash = UserManager.log_in("", "")
		end
		respond_with hash, location: nil
	end

	def destroy
		user = User.find_by_id(params[:id])
		if user 
			UserManager.log_out(user)
			respond_with json: {status: 200}
		else
			respond_with json: {status: 501, message: "No user found with that id"}
		end
	end	
end