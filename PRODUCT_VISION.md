 # Vision du Produit Yuow

## Description Générale
Yuow permet à quiconque de générer des liens de paiement universels sans création de compte. Le générateur configure une seule fois son RIB et les méthodes de paiement qu'il accepte. Ensuite, chaque lien est créé en entrant uniquement un montant. Le payeur choisit librement sa méthode préférée parmi celles proposées : virement bancaire, app de paiement etc.

## Interface Utilisateur
- Interface volontairement minimaliste
- Page de génération = liste des liens passés + configuration des moyens de paiement
- Page payeur unique avec :
  - Montant
  - Options de paiement contextuelles (mobile/desktop)
  - QR code pour paiement bancaire
  - RIB avec copier-coller
  - Deeplinks vers les apps de paiement
  - Lien discret pour devenir émetteur (croissance virale)

## Architecture Technique
- Progressive Web App avec Rails
- Déploiement via Render.com
- Stockage local des informations émetteur
- Blocs de paiement autonomes :
  - Affichage
  - Deep links
  - Validation
  - Extension facile par nouveaux blocs

## Fonctionnalités Clés
- Détection automatique langue/pays
- Commentaires bancaires structurés pour suivi
- Design responsive minimaliste
- Installation mobile possible
- Pas de base de données complexe

## Évolution
- Architecture modulaire pour ajout de fonctionnalités
- Cible d'acquisition attractive pour néobanques/agrégateurs
- Simplicité et utilité comme forces principales

## Mockup Initial
[Description du mockup à ajouter - possiblement avec un lien vers une image ou un fichier de design] 