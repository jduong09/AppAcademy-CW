class UsersController < ApplicationController
  def new
    @user = User.new

    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      redirect_to
    else
      @user.errors.full_messages
    end

  end

  def destroy
    #find by params(:id)
    @user = User.find_by(id: params[:id])
    #delete user from database
    @user.destroy
    # add redirect_to login_page
    redirect_to new_session_url
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render :show
    else
      redirect_to new_session_url
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end