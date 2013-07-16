class BlogSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :title, :explanation, :description #, :comments #, {comments: :Array }
  has_many :comments #, embed: :ids

  #def comments
  #	Comment.where(blog_id: self.id).map(&:id)
  #end

end
