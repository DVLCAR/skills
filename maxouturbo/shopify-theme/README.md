# TMAX Shop by MaxouTurbo — Thème Shopify

Thème **Shopify Online Store 2.0** sur mesure pour la boutique de pièces performance Yamaha TMAX de MaxouTurbo.
Fond blanc, style e-commerce épuré (cartes arrondies, prix bleus + prix barrés rouges, boutons pill noirs),
méga-menus déroulants, sélecteur de véhicule (TMAX 560 / 530 / 500), panier tiroir en AJAX, et un configurateur de prépa.

---

## 1. Installation du thème

1. Compresse le **contenu** du dossier `shopify-theme/` en un fichier `.zip`
   (les dossiers `layout/`, `config/`, `sections/`, `templates/`, `assets/`, `snippets/`, `locales/` doivent être **à la racine** de l'archive, pas dans un sous-dossier).
   > Le fichier `tmax-shop-theme.zip` déjà fourni est correctement structuré : tu peux l'envoyer tel quel.
2. Admin Shopify → **Boutique en ligne → Thèmes**.
3. Bouton **Ajouter un thème → Importer un thème depuis un fichier ZIP**.
4. Sélectionne le `.zip`, puis **Publier** (ou **Aperçu** pour tester avant).

> Si le bouton « Boutique en ligne » n'apparaît pas, active d'abord le canal **Online Store** dans *Paramètres → Canaux de vente*.

---

## 2. Configuration indispensable (dans l'ordre)

Le thème affiche de vraies données Shopify. Sans les étapes ci-dessous, les grilles de produits et les menus resteront vides.

### a. Collections
Crée ces collections (Produits → Collections). Le **handle** (identifiant d'URL) doit correspondre pour un branchement automatique :

| Rôle | Handle conseillé |
|------|------------------|
| Modèle TMAX 560 | `tmax-560` |
| Modèle TMAX 530 | `tmax-530` |
| Modèle TMAX 500 | `tmax-500` |
| Échappements | `echappements` |
| Freinage | `freinage` |
| Esthétique / carrosserie | `esthetique` |
| Nouveautés | `nouveautes` |
| Meilleures ventes | `best-sellers` |

Tu peux en ajouter d'autres : le thème s'adapte à n'importe quelle collection via l'éditeur.

### b. Produits
Ajoute tes produits avec **image**, **prix**, éventuellement **prix comparé** (pour l'affichage du prix barré rouge),
un **fournisseur/vendor** (ex. Akrapovič, Malossi, SC-Project) et affecte-les aux collections ci-dessus.

### c. Navigation (méga-menus)
Le méga-menu se construit à partir du menu **`main-menu`** (Boutique en ligne → **Navigation**).
- Crée les entrées de 1er niveau : **TMAX 560**, **TMAX 530**, **TMAX 500**, **Marques**, **Promos**…
- Ajoute des **sous-liens** à chaque entrée (ex. sous TMAX 560 : Échappements, Freinage, Esthétique…).
  Ces sous-liens s'affichent dans le panneau déroulant du méga-menu.
- Le lien du menu **Footer** utilise `footer` (crée-le aussi ou change-le dans l'éditeur).

### d. Personnalisation dans l'éditeur de thème
Boutique en ligne → Thèmes → **Personnaliser** :
- **Accueil** : chaque section (Sélecteur véhicule, Explorer le TMAX, Produits vedettes, Configurateur de prépa, Avis, Newsletter) est éditable et réordonnable.
- **Produits vedettes** : choisis la/les collection(s) à afficher dans les onglets.
- **Produit vedette** (page d'accueil) : sélectionne le produit à mettre en avant.
- **Configurateur de prépa** : ajoute des blocs « pièce » et associe chaque bloc à un produit.
- **Sélecteur véhicule** : les options des menus déroulants s'éditent dans les réglages de la section.
- **Réglages du thème** (icône engrenage) : couleur d'accent, logo, favicon, seuil de livraison gratuite, réseaux sociaux.

### e. Filtres de collection (facettes)
Pour les filtres sur les pages collection, installe l'app gratuite **Shopify Search & Discovery**
et configure les filtres (prix, disponibilité, fournisseur, options). Le thème affiche automatiquement `collection.filters`.

---

## 3. Structure du thème

```
layout/theme.liquid          Ossature (head, header, footer, panier tiroir, scripts)
templates/*.json             Pages OS 2.0 (accueil, produit, collection, panier, recherche…)
templates/customers/*.liquid Espace client (connexion, compte, commandes, adresses…)
sections/*.liquid            Sections modulaires avec {% schema %} + presets
snippets/*.liquid            product-card, cart-drawer
assets/base.css              Design system (design validé, tokens :root)
assets/theme.js              Méga-menu, panier AJAX, onglets, configurateur, sélecteur
config/settings_*.json       Réglages du thème
locales/*.json               Traductions (en.default requis + fr)
```

## 4. Notes techniques
- **Panier** : ajout/màj sans rechargement via l'API AJAX Shopify (`/cart/add.js`, `/cart/change.js`).
- **Sélecteur de véhicule** : redirige vers `/search` avec la requête composée (modèle + catégorie).
- **Devise & langue** : gérées par Shopify ; le format monétaire suit `shop.money_format`.
- **Couleurs** : la couleur d'accent (`--blue`) est pilotée par *Réglages du thème → Couleurs*.
- **Compatibilité** : Online Store 2.0 (sections partout, blocs d'app supportés).

---

*Thème livré clé en main. Toute la partie visuelle est déjà réglée ; il ne reste qu'à brancher tes collections, produits et menus.*
