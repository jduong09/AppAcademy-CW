require 'rails_helper'

RSpec.describe GoalsController, type: :controller do
  subject(:user) { User.new(username: "jduong", password: "jfdla;fjkl") }
  let(:goal) { Goal.new(name: "Be better, faster, stronger.", user_id: user.id) }

  describe "GET #new" do 
    before do 
      user.save
    end

    it "renders the #new template" do 
      get :new, params: { user_id: user.id }

      expect(response).to render_template("new")
      expect(response.status).to eq(200)
    end
  end
  
  describe "POST #create" do 
    before(:each) do 
      user.save
    end

    context "with invalid params" do 
      it "resets the page when submitting incomplete form" do 
        post :create, params: { goal: { private: true }, user_id: user.id }

        expect(response).to render_template("new")
      end
    end

    context "with valid params" do 
      it "redirects to user's index page" do 
        post :create, params: { goal: { name: "Be a better person.", user_id: user.id }, user_id: user.id }

        expect(response.status).to eq(302)
        #expect response to redirect to index page
      end
    end
  end

  describe "GET #index" do
    before(:each) do 
      user.save
    end

    it "renders the #index template" do
      get :index, params: { user_id: user.id }
      expect(response).to render_template("index")
    end
  end

  describe "GET #edit" do 
    before do
      user.save
      goal.save
    end

    it "renders the #edit template" do 
      get :edit, params: { user_id: user.id, id: goal.id }

      expect(response).to render_template(:edit)
      expect(response.status).to eq(200)
    end
  end

  describe "POST #update" do 
    before do
      user.save
      goal.save
    end

    context "with valid update params" do 
      it "updates user's goal, redirects to user goals page" do
        post :update, params: { user_id: user.id, id: goal.id, goal: { name: "Be better." } }

        expect(response.status).to eq(302)
      end
    end
  end

  describe "GET #show" do
    before do 
      user.save
      goal.save
    end

    it "renders :show page" do 
      get :show, params: { user_id: user.id, id: goal.id }

      expect(response.status).to eq(200)
      expect(response).to render_template("show")
    end
  end

  describe "DELETE #destroy" do 
    before do 
      user.save
      goal.save
    end

    it "delete's goal" do 
      delete :destroy, params: { user_id: user.id, id: goal.id }

      expect(response.status).to eq(204)
    end
  end
end
