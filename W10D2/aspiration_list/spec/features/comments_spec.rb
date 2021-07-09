require 'rails_helper'

feature "commenting" do 
  given!(:hello_world) { FactoryBot.create(:user_hw) }
  given!(:foo_bar) { FactoryBot.create(:user, username: "foo_bar") } 
  given!(:foo_goal) do 
    FactoryBot.create(:goal, author: foo_bar)
  end

  background(:each) do 
    
  end
end