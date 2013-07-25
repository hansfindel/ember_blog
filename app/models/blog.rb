class Blog < ActiveRecord::Base
	belongs_to :user 
	has_many :comments

	validates :user_id, :numericality => { :only_integer => true}        
  	validates_presence_of :user_id, :title, :explanation, :description

end
