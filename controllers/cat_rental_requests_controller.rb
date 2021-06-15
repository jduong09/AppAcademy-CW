class CatRentalRequestsController < ApplicationController

  def new
    @crr = CatRentalRequest.new
    @cats = Cat.all
    render :new
  end

  def create
    @crr = CatRentalRequest.new(cat_rental_request_params)

    if @crr.save
      redirect_to cat_url(@crr.cat_id)
    else
      render :new
    end
  end

  def approve
    current_cat_rental_request.approve!
    redirect_to cat_url(current_cat)
  end

  def deny
    current_cat_rental_request.deny!
    redirect_to cat_url(current_cat)
  end

  private

  def current_cat_rental_request
    @crr ||=
    CatRentalRequest.includes(:cat).find(params[:id])
  end

  def current_cat
    current_cat_rental_request.cat
  end

  def cat_rental_request_params
    params.require(:cat_rental_request).permit(:cat_id, :start_date, :end_date, :status)
  end
end