class GoalsController < ApplicationController
  def new
    @goal = Goal.new
    render :new
  end

  def create
    @goal = Goal.new(goal_params)

    if @goal.save
      redirect_to user_goals_url(@goal.user_id)
    else
      @goal.errors.full_messages
    end
  end

  def edit
  end

  def update
  end

  def show
  end

  def destroy
  end

  private

  def goal_params
    params.require(:goal).permit(:name, :public, :complete, :user_id)
  end
end