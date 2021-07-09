require 'rails_helper'

feature "the signup process" do 
  scenario "has a new user page" do 
    visit new_user_url
    expect(page).to have_content("New User Page!")
  end

  scenario "it redirects to User's own page" do
    sign_up_as('hello_world')
    expect(page).to have_content("Hello hello_world")
  end

  feature 'logging in' do
    given(:hello_world) { FactoryBot.create(:user_hw) }

    scenario 'shows username on the homepage after login' do 
      #expect(page).to have_content("Logged In As: hello_world")
      login_as(hello_world)
      expect(page).to have_content("Hello hello_world")
    end
  
  end
  
  feature 'logging out' do
    given(:hello_world) { FactoryBot.create(:user_hw) }
    
    scenario 'begins with a logged out state' do 
      visit root_url
      expect(page).to have_button("Sign In")
    end
  
    scenario 'doesn\'t show username on the homepage after logout' do
      login_as(hello_world)
      click_on("Log Out")

      expect(page).not_to have_content("hello_world")
    end
  end
end