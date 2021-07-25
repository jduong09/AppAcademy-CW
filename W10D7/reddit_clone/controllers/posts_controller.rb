class PostsController < ApplicationController
  skip_before_action :require_login, only: [:show]
  layout "sub"

  def new
    @post = Post.new

    render :new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to post_url(@post)
    else
      @post.errors.full_messages
    end
  end

  def edit
    @post = Post.find_by(id: params[:id])
    @authors = User.all
    @subs = Sub.all

    render :edit
  end

  def update
    @post = Post.find_by(id: params[:id])

    if @post.update(post_params)
      redirect_to post_url(@post)
    else
      @post.errors.full_messages
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
    redirect_to root_url
  end

  def show
    @post = Post.find_by(id: params[:id])
    @author = User.find_by(id: @post.author_id)
    @sub = Sub.find_by(id: @post.sub_ids)

    if @post
      render :show
    else
      @post.errors.full_messages
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :url, :context, :author_id, sub_ids: [])
  end
end