class SubsController < ApplicationController
  skip_before_action :require_login, only: [:index, :show]
  layout "sub"
  
  def index
    @subs = Sub.all

    render :index
  end

  def show
    @sub = Sub.find_by(id: params[:id])
    @moderator = User.find_by(id: @sub.author_id)

    if @sub
      render :show
    else
      @sub.errors.full_messages
    end
  end

  def new
    @sub = Sub.new
    @users = User.all

    render :new
  end

  def create
    @sub = Sub.new(sub_params)

    if @sub.save
      redirect_to sub_url(@sub)
    else
      @sub.errors.full_messages
      redirect_to subs_url
    end
  end

  def edit
    @sub = Sub.find_by(id: params[:id])

    render :edit
  end

  def update
    @sub = Sub.find_by(id: params[:id])

    if @sub.update(sub_params)
      redirect_to sub_url(@sub)
    else
      @sub.errors.full_messages
      redirect_to subs_url
    end
  end

  private

  def sub_params
    params.require(:sub).permit(:title, :description, :author_id)
  end
end