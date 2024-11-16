import "@hotwired/turbo-rails"

// Fonction de copie dans le presse-papier avec feedback
window.copyToClipboard = function(button, path) {
  const url = window.location.origin + path;
  const span = button.querySelector('span');
  const originalText = span.textContent;
  
  navigator.clipboard.writeText(url).then(() => {
    // Feedback visuel
    button.classList.add('bg-primary/10');
    span.textContent = 'Copié !';
    
    // Retour à l'état initial après 2 secondes
    setTimeout(() => {
      button.classList.remove('bg-primary/10');
      span.textContent = originalText;
    }, 2000);
  }).catch(err => {
    console.error('Erreur lors de la copie :', err);
    // Feedback d'erreur
    span.textContent = 'Erreur !';
    setTimeout(() => {
      span.textContent = originalText;
    }, 2000);
  });
}

console.log("Application JS loaded")