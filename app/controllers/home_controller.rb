class HomeController < ApplicationController
  def index
  end

  def create
    # On peut laisser vide car tout est géré en JS
    head :ok
  end
end
