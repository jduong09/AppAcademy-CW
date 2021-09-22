json.array! @parties do |party|
  json.name party.name
  json.guests party.guests do |guest|
    json.gifts guest.gifts do |gift|
      json.title gift.title
      json.description gift.description
    end
  end
end