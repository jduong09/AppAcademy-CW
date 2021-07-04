require 'rails_helper'

RSpec.describe UsersController, type: :controller do

  # GET :new
  describe "GET #new" do 
    it "renders the :new template" do 
      get :new, {}
      expect(response).to render_template("new")
    end
  end

  # POST :create
  describe "POST #create" do
    context "with invalid params" do 
      it "validates the presence of user's username and password" do
        post :create, params: { user: { email: "jduong", password: "jfdlka;" } }
        expect(response).to render_template("new")
      end

      it "validates that the password is 6 characters long" do 
        post :create, params: { user: { username: "jduong", password: "jk" } }
        expect(response).to render_template("new")
      end
    end

    context "with valid params" do 
      it "redirects user to user's show page" do
        post :create, params: { user: { username: "jduong", password: "iNeedAGank01" } }
        expect(response).to redirect_to(user_url(assigns(:user)))
      end
    end

  end

end
