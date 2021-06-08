class ArtworkSharesController < ApplicationController
  #share artwork
  def create
    #POST /artwork_shares
    artwork_share = ArtworkShare.new(artwork_shares_params)

    if artwork_share.save
      render json: artwork_share
    else
      render json: artwork_share.errors.full_messages, status: :unprocessable_entity
    end
  end

  #unshare artwork
  def destroy
    #DELETE /artwork_shares/:id
    artwork_share = ArtworkShare.find(params[:id])
    artwork_share.destroy
    render json: artwork_share
  end

  private

  def artwork_shares_params
    params.require(:artwork_share).permit(:viewer_id, :artwork_id)
  end
end