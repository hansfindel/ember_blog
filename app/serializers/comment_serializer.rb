class CommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :blog_id
end
