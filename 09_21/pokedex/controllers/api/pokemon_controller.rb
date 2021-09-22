class Api::PokemonController < ApplicationController
  def show
    @pokemon = Pokemon.find_by(id: params[:id])

    if @pokemon
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def index
    @pokemon = Pokemon.all
    
    render :index
  end

  def create
    @pokemon = Pokemon.create(pokemon_params)

    if @pokemon.save
      render json: @pokemon
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url)
  end
end