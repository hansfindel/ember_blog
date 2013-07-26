class Api::V1::APIController < ApplicationController
	#before_action :validate_request

	public
	def self.validate_request options
		#options = params
		if validate_registered_app(options["app_id"])
			#puts "valid apiKey"
			@current_user = User.find_by_id(options[:session_id])
			#puts @current_user.attributes.to_s if @current_user
			if @current_user.token != options[:session_token]
				@current_user = nil 
			end
			@current_user 
		else
			nil 
		end
	end
	
	def self.validate_registered_app token
	    exist = false
	    app_users.each do |t|
			if t[:key] == token
		    	exist = true
		        break
		    end
		end
		return exist
	end

	private 
	def self.app_users
		[
			{:token => "ApiToken", :owner => "EmberApp::ApiKey", :key => "ApiKey"}
		]
	end
	
	# if new tokens should be generated
	def self.token_gen(count=12)
		y = (0...20).map{65.+(rand(25)).chr}
        z = (0..10).entries
        x = ''
        count.times do |i|
            v = y[0]
            x += (z[0] > z[1] ? z[2].to_s : v)
            y = y.shuffle
            z = z.shuffle
        end
        return x
    end
end