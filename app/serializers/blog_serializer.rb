class BlogSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :title, :explanation, :description, :created_at
  has_many :comments 
  has_one :user 
end
