class PaymentsController < ApplicationController
  def show
    @payment = {
      id: params[:id],
      amount: "42.00" # Pour le moment, on met une valeur fixe
    }
  end
end
