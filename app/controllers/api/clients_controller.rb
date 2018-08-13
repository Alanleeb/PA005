class Api::ClientsController < ApplicationController
  before_action :set_client, only: [:show, :update, :destroy]

  def index
    render json: Client.all
  end

  def show 
    render json: @client
  end

  def create
    client = Client.new(client_params)
    if client.save
      render json: client
    else
      render_error(client)
    end
  end

  def update 
    if @client.update(client_params)
      render json: @client
    else
      render_error(@client)
    end
  end

  def destroy
    @client.destroy
  end

  private 
  def set_clilent
    @client = Client.find(params[:id])
  end

  def client_params
    params.require(:client).permit(:first_name, :last_name, :shoot_type, :location)

  end
end

