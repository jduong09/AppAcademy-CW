class Api::StepsController < ApplicationController
  def show
    @step = Step.find(params[:id])

    if @step
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def index
    @steps = Step.where("todo_id = ?", params[:todo_id])

    render json: @steps
  end

  def create
    @step = Step.new(steps_params)

    if @step.save
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def update
    @step = Step.find(params[:id])

    if @step.update(steps_params)
      render json: @step
    else
      render json: @step.errors.full_messages, status: 422
    end
  end

  def destroy
    @step = Step.find(params[:id])
    @step.destroy
    render json: @step
  end

  private

  def steps_params
    params.require(:step).permit(:title, :body, :todo_id, :done)
  end
end