# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "jduong", email: "jduong12", password: "hello123"})

Bench.create({description: "People's Bench", num_of_seats: 2, lat: 37.78, lng: -122.449});
Bench.create({description: "Zeitgeist's Bench", num_of_seats: 4, lat: 37.77, lng: -122.422});
Bench.create({description: "Bakery Bench", num_of_seats: 4, lat: 37.76, lng: -122.424});

Review.create({comment: "very spacious, would sit again", bench_id: 1, user_id: 1, rating: 4})
Review.create({comment: "godlike bench, i'll see it tomorrow", bench_id: 2, user_id: 1, rating: 5})