class NotesController < ApplicationController
  def new
    @note = Note.new
    @users = User.all
    @tracks = Track.all

    render :new
  end

  def create
    @note = Note.new(note_params)
    @track = Track.find(params[:note][:track_id])

    @note.save
    redirect_to track_url(@track)
  end

  def edit
    @note = Note.find(params[:note][:id])
    @tracks = Track.where(id: @note.track_id)
    @users = User.where(id: @note.user_id)

    render :edit
  end

  def update
    @note = Note.find_by(id: params[:id])
    @track = Track.find(@note.track_id)
    if @note.update(note_params)
      redirect_to track_url(@track)
    else
      @note.errors.full_messages
    end
  end

  def destroy
    @note = Note.find(params[:note][:id])
    @track = Track.find_by(id: @note.track_id)
    @note.destroy
    redirect_to track_url(@track)
  end

  private

  def note_params
    params.require(:note).permit(:content, :track_id, :user_id)
  end
end