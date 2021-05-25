require 'securerandom'

class ShortenedUrl < ApplicationRecord
  validates :long_url, presence: true, uniqueness: true

  belongs_to(
    :user,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id
  )

  def self.create_for_user_and_long_url!(user, long_url)
    ShortenedUrl.create!(
      user_id: user.id,
      long_url: long_url,
      short_url: ShortenedUrl.random_code
    )
  end

  def self.random_code
    loop do
      random_code = SecureRandom.urlsafe_base64(16)
      return random_code unless ShortenedUrl.exists?(short_url: random_code)
    end
  end
end