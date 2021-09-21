# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({"username" => "breakfast", "password" => "breakfastbreakfast" })
Todo.create({ "title" => "Wash my car", "body" => "Wash the Honda by Sunday", "done" => false, "user_id" => 1 })
Todo.create({ "title" => "Food Prep", "body" => "Make lunch/dinner for the week", "done" => false, "user_id" => 1 })
Todo.create({ "title" => "Practice CSS", "body" => "Make websites and practice styling them", "done" => false, "user_id" => 1 })

Step.create({ "title" => "Buy Soap", "body" => "Go to the store", "done" => false, "todo_id" => 1 })
Step.create({ "title" => "Go To the Store", "body" => "Drive", "done" => true, "todo_id" => 1 })
Step.create({ "title" => "Buy meat", "body" => "Go to the store", "done" => false, "todo_id" => 2 })
Step.create({ "title" => "Hackerrank", "body" => "Go to hackeerank and practice algorithms", "todo_id" => 3 })