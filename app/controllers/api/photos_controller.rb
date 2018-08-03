class Api::PhotosController < ApplicationController
  def index
    render json: Photo.all
  end

  def create
    auth = {
      cloud_name: ENV['CLOUD_NAME'],
      api_key: ENV['API_KEY'],
      api_secret: ENV['API_SECRET']
    }

    uploaded_photo_name = params.keys.first
    uploaded_file = params[uploaded_photo_name]

    begin
      cloud_photo = Cloudinary::Uploader.upload(uploaded_file, auth)
      photo = Photo.create(url: cloud_photo['url'])
      render json: photo
    rescue => e
      render json: { errors: e }, status: :bad_request
    end
  end
end
