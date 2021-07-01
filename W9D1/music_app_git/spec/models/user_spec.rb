require 'rails_helper'

RSpec.describe User, type: :model do

  subject(:user) { User.new("email" => "jduong", "password" => "fjdkal;fja") }

  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  it "creates a password digest when a password is given" do
    expect(user.password_digest).to_not be_nil
  end

  describe "#is_password?" do 
    it "verifies a password is correct" do 
      expect(user.is_password?("fjdkal;fja")).to be true
    end

    it "verifies a password is incorrect" do 
      expect(user.is_password?("buttcheeks")).to be false
    end
  end

  describe "#reset_session_token!" do
    it "generates a new session_token" do 
      current_session_token = user.session_token
      expect(user.reset_session_token!).not_to eq(current_session_token)
    end
  end

  describe ".find_by_credentials" do
    before do 
      user.save
    end

    it "returns false if username or password is incorrect" do 
      expect(User.find_by_credentials("jduong", "fjdkalfja")).to be_nil
    end

    it "returns true if username and password is correct" do 
      expect(User.find_by_credentials("jduong", "fjdkal;fja")).to be_instance_of(User)
    end
  end
end
