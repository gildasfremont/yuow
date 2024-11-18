import "@hotwired/turbo-rails"

function showToast(message) {
  const toast = document.createElement('div')
  toast.className = 'toast'
  toast.textContent = message
  document.body.appendChild(toast)
  setTimeout(() => toast.remove(), 2000)
}

window.copyLink = function(button, path) {
  const url = window.location.origin + path
  const span = button.querySelector('span')
  const originalText = span.textContent
  
  navigator.clipboard.writeText(url).then(() => {
    showToast("Lien copié !")
    span.textContent = "Copié !"
    button.classList.add('bg-primary/10')
    
    setTimeout(() => {
      span.textContent = originalText
      button.classList.remove('bg-primary/10')
    }, 2000)
  }).catch(() => {
    showToast("Erreur lors de la copie")
    span.textContent = "Erreur !"
    
    setTimeout(() => {
      span.textContent = originalText
    }, 2000)
  })
}

console.log("Application JS loaded with copy function")