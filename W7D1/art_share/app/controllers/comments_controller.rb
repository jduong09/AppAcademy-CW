class CommentsController < ApplicationController
  def create
    success = Comment.new(comment_params)

    if success.save
      render json: success, status: :created
    else
      render json: success.errors.full_messages, status: :unprocessable_entity
    end
  end

  def delete
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end

  def index
    if params[:user_id]
      user = User.find(params[:user_id])
      render json: user.comments
    elsif params[:artwork_id]
      artwork = Artwork.find(params[:artwork_id])
      render json: artwork.comments
    else
      comment = Comment.find(params[:id])
      render json: comment
    end
  end

  def like
    like = Like.new(user_id: params[:user_id], likeable_id: params[:id], likeable_type: 'Comment')
    if like.save
      render json: like
    else
      render json: like.errors.full_messages, status: :unprocessable_entity
    end
  end

  def unlike
    like = Like.find_by(user_id: params[:user_id], likeable_id: params[:id], likeable_type: 'Comment')
    if like.destroy
      render json: like
    else
      render json: like.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comments).permit(:body, :user_id, :artwork_id)
  end
end