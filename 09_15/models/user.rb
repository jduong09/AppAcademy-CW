class User < ApplicationRecord
  validates :username, :password_digest, presence: true
  validates :password, length: { minimum: 6 , allow_nil: true}
  after_initialize :ensure_session_token

  has_many :todos
  has_many :steps, through: :todos, source: :steps

  attr_reader :password

  #authentication methods
  #using BCrypt to create password digest

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
    # rails >= 3 ships with ActiveModel::SecurePassword which uses bcrypt-ruby
    SecureRandom::urlsafe_base64
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end