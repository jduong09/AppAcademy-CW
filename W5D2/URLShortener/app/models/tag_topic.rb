# == Schema Information
#
# Table name: tag_topics
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class TagTopic < ApplicationRecord
  validates: name, presence: true

  has_many(
    :taggings,
    class: 'Tagging',
    foreign_key: :tag_topic_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many :shortened_urls,
  through: :taggings,
  source: :shortened_url

  def popular_link
    shortened_urls.joins(:visits)
      .group(:short_url, :long_url)
      .order('COUNT(visits.id) DESC')
      .select('long_url, short_url, COUNT(visits.id) as number_of_visits')
      .limit(5)
  end
end