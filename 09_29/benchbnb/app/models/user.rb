# Schema Info
# Table name: users
# id :integer, not null, primary key
# username :string, not null
# email :string, not null
# password_digest :string
# session_token :string

class User < ApplicationRecord
  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  attr_accessor :password

  def self.find_by_credentials(username, password)
  user = User.find_by(username: username)

  return nil if user.nil?

  if user.is_password?(password)
    return user
  else
    return nil
  end
  end

  def password=(password)
  # set instance variable so that we can validate length. This variable will be removed once the model has been used
  @password = password

  #create and assign a password digest using BCrypt's create method
  self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
  # When a user logs out, scramble their session_token so bad people cannot get ahold of it
  self.session_token = SecureRandom.urlsafe_base64
  self.save
  self.session_token
  end
end