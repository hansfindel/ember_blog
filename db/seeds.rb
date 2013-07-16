# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Blog.destroy_all
b0 = Blog.create(title: "First post!", explanation: "!!!!", description: "")
b0.comments.create({description: "hey! delete this! this adds no value!"})

b1 = Blog.create(title: "Horror at B", explanation: "Something happened today at B", description: "Today at noon was a normal day. Until a random pair of youngsters came in a drugstore in B.")

b2 = Blog.create(title: "Purpose", explanation: "ActiveModel::Serializers", description: "The purpose of ActiveModel::Serializers is to provide an object to encapsulate serialization of ActiveModel objects, including ActiveRecord objects.Serializers know about both a model and the current_user, so you can customize serialization based upon whether a user is authorized to see the content.In short, serializers replace hash-driven development with object-oriented development.")
b2.comments.create(description: "!!!!")
b2.comments.create(description: "this is great")
b2.comments.create(description: "default in rails 4")

