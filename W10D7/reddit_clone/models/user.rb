class User < ApplicationRecord
  validates :username, :password_digest, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true, }
  after_initialize :ensure_session_token

  has_many(
    :subs,
    class_name: 'Sub',
    foreign_key: :author_id,
    primary_key: :id
  )

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :author_id,
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :posts,
    class_name: "Post",
    foreign_key: :author_id,
    primary_key: :id,
    dependent: :destroy
  )

  attr_reader :password

  #methods for authentication

  #Given a username & password, return user object if credentials are correct, or return nil if they are incorrect
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?

    if user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  #Given a password, check if it is correct using BCrypt.
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  private

  #After initialize, ensure that there is a session token. 
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
  
end