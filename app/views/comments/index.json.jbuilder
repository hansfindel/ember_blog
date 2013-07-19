json.array!(@comments) do |comment|
  json.extract! comment, :description, :blog_id
  json.url comment_url(comment, format: :json)
end