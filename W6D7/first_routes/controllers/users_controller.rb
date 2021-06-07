class UsersController < ApplicationController
  def index
    render json: User.all
  end

  def create
    user = User.new(self.user_params)

    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    render json: User.find(params[:id])
  end

  def update
    #POST users/:id
    user = User.find(params[:id])

    success = user.update(self.user_params)

    if success
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def delete
    #DELETE users/:id
    user = User.find(params[:id])
    user.destroy
    render json: user
  end

  protected
  def user_params
    self.params[:user].permit(:name, :email)
  end

end