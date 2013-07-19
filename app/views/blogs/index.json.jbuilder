json.array!(@blogs) do |blog|
  json.extract! blog, :title, :explanation, :description
  json.url blog_url(blog, format: :json)
end