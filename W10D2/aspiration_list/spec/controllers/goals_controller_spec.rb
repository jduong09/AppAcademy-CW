require 'rails_helper'

RSpec.describe GoalsController, type: :controller do
  subject(:user) { User.create(username: "jduong", password: "jfdla;fjkl") }

  describe "GET #new" do 
    it "renders the #new template" do 
      get :new, params: { user: { id: 1 } }
      expect(response).to render_template("new")
    end
  end
  
  describe "POST #create" do 
    context "with invalid params" do 
      it "resets the page when submitting incomplete form" do 
        post :create, params: { goals: { public: true, user_id: 1 } }
        expect(response).to render_template("new")
      end
    end

    context "with valid params" do 
      it "redirects to user's index page" do 
        post :create, params: { goals: { name: "Be a better person.", public: true, user_id: 1 } }
        expect(response).to render_template("index")
      end
    end
  end

  describe "GET #index" do
    it "renders the #index template" do
      get :index, params: { id: 1 }
      expect(response).to render_template("index")
    end
  end

end
