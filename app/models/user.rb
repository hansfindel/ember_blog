class User < ActiveRecord::Base

	#relations
	has_many :blogs

	#validations
	before_create :encrypt
	
  	validates_presence_of :email, :username
	validates_uniqueness_of :email, :username, case_sensitive: false
	
	validates_format_of :username,
    				multiline: true, 
    				with: /^(?=.*([a-z]|[A-Z]))([\x20-\x7E])*$/    				
    
    validates_format_of :email,
    				multiline: true, 
    				with: /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i
	    				      				  
    validates_length_of :password,
    				multiline: true, 
    				within: 4..16 ,
    				too_short: "too short", 
    				too_long: "too long ",
    				on: :create

	# triggered methods
	def encrypt
		self.token = UserManager.generate_token(self.email)
		passes = UserManager.encrypt_password(self.password)
		self.password_salt = passes[0]
		self.password_hash = passes[1]
	end

	#accessors
	def password
		@password
	end
	def password=(p)
		@password = p
	end

	#methods... 
end
