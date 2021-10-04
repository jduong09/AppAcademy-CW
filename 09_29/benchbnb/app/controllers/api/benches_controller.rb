class Api::BenchesController < ApplicationController
  def index
    @benches = !params[:bounds] ? Bench.all : Bench.in_bounds(params[:bounds])

    render json: @benches
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render json: @bench
    else
      render @bench.errors.full_messages, status: 422
    end
  end

  private

  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end

end