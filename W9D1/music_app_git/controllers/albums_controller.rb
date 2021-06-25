class AlbumsController < ApplicationController
  def create
    @album = Album.new(album_params)

    if @album.save
      redirect_to album_url(@album)
    else
      @album.errors.full_messages
    end
  end

  def new
    @bands = Band.all
    @album = Album.new

    render :new
  end

  def edit
    @album = Album.find_by(id: params[:id])

    render :edit
  end
  
  def update
    @album = Album.find_by(id: params[:id])

    if @album.update(album_params)
      redirect_to album_url(@album)
    else
      @album.errors.full_messages
    end
  end

  def destroy
    @album = Album.find_by(id: params[:id])
    @album.destroy
    @album
  end

  def show
    @album = Album.find_by(id: params[:id])
    @tracks = Track.where(album_id: params[:id])

    if @album
      render :show
    else
      @album.errors.full_messages
    end
  end

  private

  def album_params
    params.require(:album).permit(:title, :year, :live, :studio, :band_id)
  end
end