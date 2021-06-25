class TracksController < ApplicationController
  def new
    @track = Track.new
    @albums = Album.all

    render :new
  end

  def create
    @track = Track.new(track_params)

    if @track.save
      redirect_to track_url(@track)
    else
      render json: "Error."
    end
  end

  def show
    @track = Track.find_by(id: params[:id])
    @notes = Note.all.where('track_id = ?', @track.id)

    if @track
      render :show
    else
      @track.errors.full_messages
    end
  end

  def edit
    @track = Track.find_by(id: params[:id])

    if @track
      render :edit
    else
      @track.errors.full_messages
    end
  end

  def destroy
    @track = Track.find_by(id: params[:id])
    @track.destroy
    @track
  end

  def update
    @track = Track.find_by(id: params[:id])

    if @track.update(track_params)
      redirect_to track_url(@track)
    else
      @track.errors.full_messages
    end
  end

  private

  def track_params
    params.require(:track).permit(:title, :ord, :regular, :bonus, :album_id)
  end
end