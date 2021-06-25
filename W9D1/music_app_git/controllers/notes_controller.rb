class NotesController < ApplicationController
  def new
    @note = Note.new
    @users = User.all
    @tracks = Track.all

    render :new
  end

  def create
    @note = Note.new(note_params)
    @track = Track.where(id: params[track][track_id])

    @note.save
    redirect_to track_url(@track)
  end

  def edit
    @note = Note.find_by(id: params[:id])

    render :edit
  end

  def update
    @note = Note.find_by(id: params[:id])

    if @note.update
      redirect_to notes_url(@note)
    else
      @note.errors.full_messages
    end
  end

  def destroy
  end

  private

  def note_params
    params.require(:note).permit(:content, :track_id, :user_id)
  end
end