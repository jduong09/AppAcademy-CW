# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artwork.destroy_all
ArtworkShare.destroy_all
Comment.destroy_all

user1 = User.create!(username: 'robert')
user2 = User.create!(username: 'bill')
artwork1 = Artwork.create!(title: 'nighthawks', image_url: 'google.com', artist_id: user1.id)
artwork2 = Artwork.create!(title: 'mona lisa', image_url: 'google1.com', artist_id: user2.id)
ArtworkShare.create!(artwork_id: artwork1.id, viewer_id: user2.id)
ArtworkShare.create!(artwork_id: artwork2.id, viewer_id: user2.id)
comment1 = Comment.create!(body: "This is a nice piece of work", user_id: user1.id, artwork_id: artwork2.id)
comment2 = Comment.create!(body: "This looks like butt", user_id: user2.id, artwork_id: artwork1.id)
user3 = User.create!(username: 'justin')
comment3 = Comment.create!(body: "Wow you stink!", user_id: user3.id, artwork_id: artwork1.id)
artwork_like1 = user1.likes.create!(likeable: artwork2)
artwork_like2 = user2.likes.create!(likeable: artwork1)
artwork_like3 = user3.likes.create!(likeable: artwork1)
artwork_like4 = user3.likes.create!(likeable: artwork2)
comment_like1 = user1.likes.create!(likeable: comment2)
comment_like2 = user2.likes.create!(likeable: comment3)
comment_like3 = user3.likes.create!(likeable: comment1)
comment_like4 = user3.likes.create!(likeable: comment2)