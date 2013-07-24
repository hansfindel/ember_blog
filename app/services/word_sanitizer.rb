# encoding: utf-8
class WordSanitizer

	def self.as_url(string)
		string = sanitize(string)
		string = destildar(string)
		string.to_s.downcase 
	end

	def self.sanitize(string)
	    string ||= ""
		string.gsub(/[\s|.|,|\/|?|=|≠|¬|!|+|*|$|&|:|;|@|#|%]/,"")
	end
	def self.destildar(string)
	    string = string.gsub("Á","A").gsub("É","E").gsub("Í","I").gsub("Ó","O").gsub("Ú","U")
	    string = string.gsub("á","a").gsub("é","e").gsub("í","i").gsub("ó","o").gsub("ú","u")
	    string = string.gsub("ñ","n").gsub("Ñ","N").gsub("º","")
	    string = string.gsub("'","").gsub("´","").gsub("`","")
	    string
	end
end