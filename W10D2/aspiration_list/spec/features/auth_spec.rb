require 'rails_helper'

feature "the signup process" do 
  scenario "has a new user page" do 
    visit new_user_url
    expect(page).to have_content("New User Page!")
  end

  feature "signing up a user" do 
    before(:each) do 
      visit new_user_url
      fill_in "Username", :with => 'hello_world'
      fill_in "Password", :with => 'password'
      click_on 'create user'
    end

    scenario "it redirects to User's own page" do
      expect(page).to have_content("Hello hello_world")
    end
  end

  feature 'logging in' do
    let(:user) { User.new(username: 'hello_world', password: 'password') }

    before(:each) do
      user.save
      visit new_session_url
      fill_in "Username", :with => 'hello_world'
      fill_in "Password", :with => 'password'
      click_on "sign in"
    end

    scenario 'shows username on the homepage after login' do 
      #expect(page).to have_content("Logged In As: hello_world")
      expect(page).to have_content("Hello hello_world")
    end
  
  end
  
  feature 'logging out' do
    scenario 'begins with a logged out state'
  
    scenario 'doesn\'t show username on the homepage after logout'
  
  end
end