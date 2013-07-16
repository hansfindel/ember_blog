json.array!(@blogs) do |blog|
  json.extract! blog, :title, :explanation, :content
  json.url blog_url(blog, format: :json)
end