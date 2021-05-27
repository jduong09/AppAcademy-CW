require 'securerandom'

class ShortenedUrl < ApplicationRecord
  validates :long_url, presence: true, uniqueness: true

  belongs_to(
    :submitter,
    class_name: 'User',
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :taggings,
    class_name: 'Tagging',
    foreign_key: :shortened_url_id
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :visits,
    class_name: 'Visit',
    foreign_key: :shortened_url_id,
    primary_key: :id
  )

  has_many :visitors, # -> { distinct},
   through: :visits, source: :visitor

  has_many :tag_topics, through: :taggings, source: :tag_topic

  def self.create_for_user_and_long_url!(user, long_url)
    ShortenedUrl.create!(
      user_id: user.id,
      long_url: long_url,
      short_url: ShortenedUrl.random_code
    )
  end

  def self.random_code
    # keep looping until you find a new random code.
    loop do
      random_code = SecureRandom.urlsafe_base64(16)
      # check is the ShortenedUrl database already has this random code
      return random_code unless ShortenedUrl.exists?(short_url: random_code)
    end
  end

  #Count the number of clicks on a ShortenedUrl
  def num_clicks(shortened_url_id)
    visits.count
  end

  #Determine the number of distinct users who have clicked the link
  def num_uniques
    visits.select('user_id').distinct.count
  end

  def num_recent_uniques
    visits
        .select('user_id')
        .where('created_at > ?', 10.minutes.ago)
        .distinct
        .count
  end
end