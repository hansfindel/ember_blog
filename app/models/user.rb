class User < ActiveRecord::Base

	#relations
	has_many :blogs

	#validations
	before_create :encrypt

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
