FactoryBot.define do
  factory :goal do
    name { Faker::Lorem.words(3).join(" ") }
  end
end
