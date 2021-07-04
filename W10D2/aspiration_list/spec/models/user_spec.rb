require 'rails_helper'

RSpec.describe User, type: :model do
  # Validate presence of our columns in our db
    # username, password_digest, session_token
  # We do not keep the password in the db, instead we keep the password digest, which will be a BCrypt generated password
  # of the password that the user submits to the database.
    # We can still perform validations on this password by creating it as an instance variable in the model.

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_presence_of(:session_token) }
  it { should validate_length_of(:password).is_at_least(6) }
  it { should have_many(:goals) }

  # Model methods that we need to perform testing on.
    # is_password?(password)
      # Model method that will help .find_by_credentials
  subject(:user) { User.new(username: "jduong", password: "iNeedARecap01") }

  describe "#is_password?" do 
    it "returns false if given wrong password" do
      expect(user.is_password?("iNeedAGankPlease")).to be false
    end

    it "returns true if given the right password" do 
      expect(user.is_password?("iNeedARecap01")).to be true
    end
  end
  
  # reset_session_token!
    # In case someone gets their hands on the user's session token, use this method to reset it.
  describe "#reset_session_token!" do 
    it "sets a new unique session_token" do 
      current_session_token = user.session_token
      expect(user.reset_session_token!).not_to eq current_session_token
    end
  end
  
  # .find_by_credentials(username, password)
    # Return nil if the password is incorrect or the user is not found. Else, return query result.

  describe ".find_by_credentials" do 
    before do
      user.save
    end

    context "given invalid params" do
      it "returns nil if username or password is the incorrect credentials" do 
        expect(User.find_by_credentials("jduong", "fjkdla;f")).to be_nil
      end
    end

    it "returns the user if the username and password is valid" do 
      expect(User.find_by_credentials("jduong", "iNeedARecap01")).to be_instance_of User
    end
  end

  # generate_session_token (private method?)
    # Create a SecureRandomToken that the user will use to sign in and the server-side can use to verify that the user is allowed to go to a certain page.
  # ensure_session_token (private method)
    # After initialization, create a session_token.

end
