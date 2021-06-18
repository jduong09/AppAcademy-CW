# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cat1 = Cat.create!(birth_date: "2021/1/1", color: "brownish-red", name: "Boots", sex: "F", description: "A cute feline with a wonderful personality!")
cat2 = Cat.create!(birth_date: "2021/3/15", color: "black", name: "Darkness", sex: "M", description: "A cutie patootie")
cat3 = Cat.create!(birth_date: "2019/7/20", color: "albino", name: "Mayonaise", sex: "M", description: "A fiesty feline with a silly personality!")
cat4 = Cat.create!(birth_date: "2017/9/9", color: "brown", name: "Silvestor", sex: "M", description: "A feline always on the hunt!")

crr1 = CatRentalRequest.create!(cat_id: cat1.id, start_date: "2021/6/13", end_date: "2021/6/15")
crr2 = CatRentalRequest.create!(cat_id: cat2.id, start_date: "2021/6/7", end_date: "2021/6/9")
crr3 = CatRentalRequest.create!(cat_id: cat3.id, start_date: "2021/6/11", end_date: "2021/6/14")
crr4 = CatRentalRequest.create!(cat_id: cat4.id, start_date: "2021/6/1", end_date: "2021/6/15")
crr5 = CatRentalRequest.create!(cat_id: cat1.id, start_date: "2021/6/15", end_date: "2021/6/18")
crr6 = CatRentalRequest.create!(cat_id: cat1.id, start_date: "2021/6/14", end_date: "2021/6/18")


