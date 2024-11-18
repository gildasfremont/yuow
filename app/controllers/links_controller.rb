class LinksController < ApplicationController
  def create
    puts "Creating new link..."
    
    @link = {
      id: SecureRandom.uuid,
      amount: params[:amount],
      created_at: Time.current
    }
    
    puts "Link created: #{@link.inspect}"
    
    respond_to do |format|
      format.turbo_stream do
        puts "Rendering turbo_stream response"
        render turbo_stream: turbo_stream.prepend(
          "links-list",
          partial: "links/link",
          locals: { link: @link }
        )
      end
      format.html { redirect_to root_path }
    end
  end
end 