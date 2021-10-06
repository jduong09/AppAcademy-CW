class Api::BenchesController < ApplicationController
  def index
    bench = !params[:bounds] ? Bench.all : Bench.in_bounds(params[:bounds])

    bench = params[:maxSeating] ? bench.where("num_of_seats <= ? ", params[:maxSeating]) : bench
    bench = params[:minSeating] ? bench.where("num_of_seats >= ? ", params[:minSeating]) : bench
    
    @benches = bench

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
    params.require(:bench).permit(:description, :num_of_seats, :lat, :lng)
  end

end