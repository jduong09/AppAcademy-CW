class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.where("bench_id = ?", params[:bench_id])

    render json: @reviews
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :bench_id, :user_id, :comment)
  end
end