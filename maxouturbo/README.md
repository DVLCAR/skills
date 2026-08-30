# TMAX Shop by MaxouTurbo — site / thème Shopify

Boutique e-commerce **TMAX Shop**, opérée par **MaxouTurbo** (atelier scooter à
Auriol / Marseille). Vente en ligne de **pièces & accessoires pour Yamaha TMAX**
(TMAX 560, 530, 500).

> Projet inspiré du *fonctionnement* des boutiques spécialisées type TMAX Performance
> (navigation par modèle, sélecteur de véhicule, marques, prix barrés) — sans copie,
> avec l'identité « TMAX Shop by MaxouTurbo ».

Destination finale : **thème Shopify** (la boutique sera hébergée sur Shopify).

## Direction artistique

- **Style** : e-commerce épuré et moderne, **fond blanc**, cartes arrondies, ombres douces.
- **Couleurs** : blanc `#FFFFFF` · encre `#0E0E12` · gris `#56565E`/`#9A9AA3` ·
  média produit `#F4F4F6` · filet `#EAEAEE` · **prix bleu `#1B63F2`** · barré rouge `#E5342A`.
- **Boutons** : pill noirs (`Rechercher`, `Ajouter au panier`), pill bleu pour les CTA secondaires.
- **Onglets modèle** : pill noir actif / gris inactif (TMAX 560 / 530 / 500).
- **Typo** : *Plus Jakarta Sans* (titres 800, texte 400-600) — clean, moderne, e-commerce.
- **Prix** en bleu, ancien prix barré en rouge ; badges « Épuisé » / « −X % ».
- Thème **clair uniquement** (fond blanc pour tous les visiteurs).

## Contenu

```
maxouturbo/
└── preview/
    └── index.html   # Maquette de la page d'accueil (HTML/CSS/JS autonome)
```

### `preview/index.html`

Maquette statique et autonome de la page d'accueil, façon boutique TMAX. Sections :
barre d'annonce · header (nav par modèle + Les marques + recherche/compte/panier) ·
hero + **sélecteur de véhicule** (Modèle / Année / Catégorie + « Rechercher ») ·
rangée de **marques** · **En vedette** (grille + onglets 560/530/500) ·
**produit Nouveauté** en vedette (pastille ronde animée + « Ajouter au panier ») ·
**Indispensable** (grille + onglets) · **Support téléphone** (carrousel + flèches) ·
barre de réassurance · newsletter (−10 %) · footer + bulle « Chat ».

Interactions : menu mobile, onglets modèle (mise à jour des titres), ajout au panier
(compteur + toast), favoris, carrousel, sélecteur mémorisé (`localStorage`), newsletter.
Responsive. Illustrations produit en SVG (placeholders — vraies photos à intégrer sur Shopify).

> Contenu, prix, marques et références = **données de démonstration** à remplacer.

## Étapes suivantes (proposées)

1. Valider la direction visuelle sur la page d'accueil.
2. Décliner : page collection (par modèle / catégorie), fiche produit, panier, recherche.
3. **Convertir en thème Shopify Online Store 2.0** : `sections/`, `templates/*.json`,
   `blocks`, `config/settings_schema.json`, `locales/fr.json`, `assets/` (CSS/JS),
   avec collections « TMAX 560/530/500 » et métachamps de compatibilité pour le sélecteur.
```
