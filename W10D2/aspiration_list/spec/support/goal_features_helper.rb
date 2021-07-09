module GoalFeaturesHelper

  def submit_new_goal(user)
    visit new_user_goal_url(user)
    fill_in "Name", :with => "Be great!"
    click_on "Submit New Goal"
  end

  def build_three_goals(user)
    FactoryBot.create(:goal, name: "Be great!", author: user)
    FactoryBot.create(:goal, name: "Be Even greater", author: user)
    FactoryBot.create(:goal, name: "bake a cake", author: user)
  end

  def verify_three_goals(user)
    visit user_goals_url(user)
    expect(page).to have_content "Be great!"
    expect(page).to have_content "Be Even greater"
    expect(page).to have_content "bake a cake"
  end
end