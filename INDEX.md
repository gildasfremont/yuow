# Index du Projet Yuow

## Structure du Projet

### Configuration
- `tailwind.config.js` - Configuration Tailwind avec thème personnalisé
- `config/routes.rb` - Routes de l'application
- `app/assets/config/manifest.json` - Manifeste PWA

### Vues
- `app/views/layouts/application.html.erb` - Layout principal
- `app/views/shared/_header.erb` - En-tête partagé
- `app/views/home/index.html.erb` - Page d'accueil avec générateur

### JavaScript
- `app/javascript/controllers/payment_form_controller.js` - Gestion formulaire de paiement

### Documentation
- `DECISIONS.md` - Journal des décisions architecturales
- `NEXT_STEPS.md` - Suivi des prochaines étapes
- `PRODUCT_VISION.md` - Vision du produit
- `INDEX.md` - Ce fichier (structure du projet)

## Commandes Utiles

Pour vérifier l'état du projet :
git status

Pour lancer le serveur :
rails s

Pour compiler les assets :
rails assets:precompile

## Workflow Git

1. Avant chaque session :
   git pull
   git status

2. Après modifications :
   git add .
   git commit -m "type: description"
   git push

## Conventions

### Messages de Commit
- feat: nouvelles fonctionnalités
- fix: corrections de bugs
- doc: documentation
- style: formatage, style
- refactor: refactorisation
- test: ajout/modification tests

### Documentation
- Mettre à jour INDEX.md pour chaque nouveau fichier
- Dater les entrées dans DECISIONS.md
- Marquer l'avancement dans NEXT_STEPS.md 