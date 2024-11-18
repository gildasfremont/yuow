import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Clipboard controller connected")
  }

  copy(event) {
    event.preventDefault()
    console.log("Copy triggered")
    
    const path = this.element.dataset.clipboardPath
    const url = window.location.origin + path
    
    navigator.clipboard.writeText(url).then(() => {
      this.showToast("Lien copié !")
      this.updateButton("Copié !")
    }).catch(() => {
      this.showToast("Erreur lors de la copie")
      this.updateButton("Erreur !")
    })
  }

  showToast(message) {
    const toast = document.createElement('div')
    toast.className = 'fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded-md shadow-lg z-50'
    toast.textContent = message
    document.body.appendChild(toast)
    
    setTimeout(() => toast.remove(), 2000)
  }

  updateButton(text) {
    const span = this.element.querySelector('span')
    const originalText = span.textContent
    span.textContent = text
    
    setTimeout(() => {
      span.textContent = originalText
    }, 2000)
  }
}