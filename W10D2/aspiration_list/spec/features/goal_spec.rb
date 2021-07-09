require 'rails_helper'

feature "creating, updating, deleting goals" do 
  given(:hello_world) { FactoryBot.create(:user_hw) }

  background(:each) do
    login_as(hello_world)
  end

  feature "creating goals" do 
    scenario "signed-in user can create their goals" do
      submit_new_goal(hello_world)
      expect(page).to have_content("hello_world Goals")
      expect(page).to have_content("Be great!")
    end
  end

  feature "reading goals" do
    scenario "should list goals" do
      build_three_goals(hello_world)
      verify_three_goals(hello_world)
    end
  end

  feature "updating goals" do 
    given(:goal) { FactoryBot.create(:goal, author: hello_world) }

    scenario "should have a page for updating a goal" do 
      visit edit_user_goal_url(user_id: hello_world.id, id: goal.id)
      expect(page).to have_content "Edit Goal"
    end

    scenario "should show the updated goal after updating a goal" do 
      visit edit_user_goal_url(user_id: hello_world.id, id: goal.id)
      fill_in "Name", with: "Be sicko"
      click_on "Edit Goal"
      expect(page).to have_content "Be sicko"
    end
  end

  feature "deleting goals" do
    scenario "should allow the deletion of a goal" do 
      build_three_goals(hello_world)
      visit user_goals_url(user_id: hello_world.id, id: goal.id)
      click_on("Delete Be great! Goal")
      expect(page).not_to have_content("Be great!")
    end
  end

end