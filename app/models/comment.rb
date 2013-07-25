class Comment < ActiveRecord::Base
	belongs_to :blog

	validates :blog_id, :numericality => { :only_integer => true}        
  	validates_presence_of :blog_id, :description
end
