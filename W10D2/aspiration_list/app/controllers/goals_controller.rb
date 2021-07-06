class GoalsController < ApplicationController
  def index
    @user = User.find_by(id: params[:user_id])
    @goals = Goal.where(user_id: @user.id)

    if @user
      render :index
    else
      @user.errors.full_messages
    end
  end

  def new
    @goal = Goal.new
    @users = User.all
    render :new
  end

  def create
    @goal = Goal.new(goal_params)
    @users = User.all

    if @goal.save
      redirect_to user_goals_url(@goal.user_id)
    else
      render :new
    end
  end

  def edit
    @goal = Goal.find_by(id: params[:id])

    if @goal
      render :edit
    else
      @goal.errors.full_messages
    end
  end

  def update
    @goal = Goal.find_by(id: params[:id])
    @user = User.find_by(id: @goal.user_id)

    @goal.update(goal_params)
    redirect_to user_goals_url(@user)
  end

  def show
    @goal = Goal.find_by(id: params[:id])

    if @goal
      render :show
    else
      @goal.errors.full_messages
    end
  end

  def destroy
    @goal = Goal.find_by(id: params[:id])

    @goal.destroy
    @goal
  end

  private

  def goal_params
    params.require(:goal).permit(:name, :public, :complete, :user_id)
  end
end