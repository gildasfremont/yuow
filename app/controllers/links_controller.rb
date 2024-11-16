class LinksController < ApplicationController
  def create
    puts "Format: #{request.format.inspect}"
    
    @link = {
      id: SecureRandom.uuid,
      amount: params[:amount],
      created_at: Time.current
    }
    
    respond_to do |format|
      format.turbo_stream
      format.html { redirect_to root_path }
    end
  end
end 