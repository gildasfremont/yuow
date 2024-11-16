import { Application } from "@hotwired/stimulus"
import PaymentFormController from "./payment_form_controller"

const application = Application.start()
application.register("payment-form", PaymentFormController)
