# Prochaines étapes de développement

## 1. Installation des dépendances
Ajouter au Gemfile :
- serviceworker-rails
- view_component
- stimulus-rails
- rqrcode
- rspec-rails (group: development, test)
- factory_bot_rails (group: development, test)

Commandes à exécuter :
- bundle install
- rails generate rspec:install

## 2. Structure PWA
- Configurer le service worker
- Ajouter le manifest.json
- Configurer le stockage local

## 3. Pages principales
- Générer le contrôleur Home
- Créer la vue principale avec le formulaire
- Implémenter le système de stockage local pour les configurations

## 4. Premier module de paiement
- Créer le module de virement bancaire
- Implémenter la génération de QR code
- Ajouter les deep links

## 5. Tests
- Configurer RSpec
- Écrire les premiers tests unitaires  