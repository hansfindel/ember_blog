class BlogSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :title, :explanation, :description 
  has_many :comments 
end
