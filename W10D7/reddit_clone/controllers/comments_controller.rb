class CommentsController < ApplicationController
  layout "sub"
  
  def new
    @comment = Comment.new

    render :new
  end

  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      redirect_to post_url(@comment.post_id)
    else
      redirect_to root_url
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])

    if @comment
      render :show
    else 
      redirect_to root_url
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:content, :author_id, :post_id, :parent_comment_id)
  end
end