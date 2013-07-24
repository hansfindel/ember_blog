class UserManager

  def self.generate_token(string)
    date_impressed = Time.now.to_s
    key = string.to_s + date_impressed
    salt = BCrypt::Engine.generate_salt
    encrypted_key = BCrypt::Engine.hash_secret(key,salt)
    #if needs to be uniq
    #while encrypted_key.index('/')!=nil||encrypted_key.index('.')!=nil 
    #  date_impressed = Time.now.to_s
    #  key = string.to_s + date_impressed
    #  encrypted_key = BCrypt::Engine.hash_secret(key,salt)
    #end
    #Token.create(:value => encrypted_key, :user_id => id, :date_impressed => date_impressed)
    encrypted_key
  end
  
  def self.get_user_id(thing)
   	if thing && thing.include?("@")
        	#emails should be all downcase
   		user = User.where("email like ?",thing.downcase).first
   	elsif thing
   		user = User.where(:username => thing).first
   	end
   	user 
  end

  def self.authenticate(mail, password)
   	user = self.get_user_id(mail)
   		
   	if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
   		return user
   	elsif user
   		#check if user created the account or logged in with a mobile devise and tries to access differently
   		pass=password.capitalize
   		pass2=password[0,1].downcase.to_s + password[1, password.length].to_s
   		if user.password_hash == BCrypt::Engine.hash_secret(pass, user.password_salt) || user.password_hash == BCrypt::Engine.hash_secret(pass2, user.password_salt)
   			return user
   		else
   			return nil
   		end
   	else
   		nil
   	end
  end

  def self.log_in(mail, password)
    user = self.authenticate(mail, password)
    hash = {}
    if user
      user.token = WordSanitizer.as_url(self.generate_token(user.id.to_s))
      user.save 
      hash = {token: user.token, email: user.email, username: user.username, user_id: user.id}
    end
    hash 
  end

  def self.encrypt_password(new_password, old_password = nil, password_salt = nil)
    if old_password.present? and password_salt.present?
      if self.password_hash != BCrypt::Engine.hash_secret(old_password, password_salt)        
        return false
      end
    end
	if new_password.present?
      	@old_salt = password_salt
		password_salt = BCrypt::Engine.generate_salt
		password_hash = BCrypt::Engine.hash_secret(new_password, password_salt)
	end
	[password_salt, password_hash]
  end


end