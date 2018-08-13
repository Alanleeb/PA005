class Api::GalleriesController < ApplicationController
  def index
   render :json Gallery.all
  end

  def new
    clients = CLient.all.map{ |i| { name: i.name, id: i.id } } 
    render json: clients
  end

  def show
    render json: @gallery
  end

  def create
    galleries = Gallery.new(gallery_params)
    if galleries.save
      render json: gallery 
    else 
      render_error(gallery)
    end
  end

  def update
    if @gallery.update(gallery_params)
      render json: @gallery 
    else 
      renser_error(@gallery)
    end  
  end

  def destroy
    Galelry.find(params[:id]).destroy
  end

  private

  def gallery_Params 
    params.require(:gallery).permit(:gallery_id, :shoot_name)
  end

end
