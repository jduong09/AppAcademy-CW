class ArtworksController < ApplicationController
  def index
    user = User.find(params[:user_id])
    render json: user.artworks
  end

  def create
    artwork = Artwork.new(artwork_params)

    if artwork.save
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    artwork = Artwork.find(params[:id])

    success = artwork.update(artwork_params)

    if success
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    artwork = Artwork.find(params[:id])

    render json: artwork
  end

  def delete
    artwork = Artwork.find(params[:id])
    artwork.destroy
    render json: artwork
  end

  private

  def artwork_params
    params.require(:artwork).permit(:title, :artist_id, :image_url)
  end
end