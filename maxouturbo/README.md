# TMAX Shop by MaxouTurbo — site / thème Shopify

Boutique e-commerce **TMAX Shop**, opérée par **MaxouTurbo** (atelier scooter à
Auriol / Marseille). Vente en ligne de **pièces & accessoires Yamaha TMAX** (560, 530, 500).

Approche demandée : **~50 % repris du fonctionnement de TMAX Performance**
(structure éprouvée, analysée depuis un export PDF de leur home) **+ ~50 % de
fonctionnalités innovantes** pour une boutique en ligne, **adaptables sur Shopify**.

## Le split 50 / 50

**Repris de TMAX Performance (éprouvé)**
- Barre d'annonce « Paiement en 4X sans frais »
- **Sélecteur de véhicule** Modèle / Année / Catégorie + « Rechercher »
- Section **En vedette** avec onglets TMAX 560 / 530 / 500
- **Produit Nouveauté** avec pastille ronde animée + variante segmentée (façon « Atmo/Turbo »)
- Section **Support téléphone** en carrousel
- Rangée de **marques** (BCD, Puig, Malossi, Akrapovič, Quad Lock, Rizoma…)
- **4 blocs réassurance** (Livraison gratuite, Service client 72h, Paiement sécurisé, Emballage protégé)
- Footer À propos / Mentions légales + sélecteur **langue / devise**
- Cartes produit : marque en capitales, **prix bleu**, ancien prix **barré rouge**, badge « Épuisé »

**Innovant (nouveau, compatible Shopify)**
1. **« Explore ton TMAX »** — schéma interactif du scooter avec **points cliquables**
   (échappement, freinage, variateur, esthétique, cockpit) → collection.
2. **« Compose ta prépa »** — **configurateur de pack** : coche des pièces, total en
   direct, remise −10 %, « ajouter le pack au panier » (évolution de leur « Votre TMAX BCD »).
3. **Panier tiroir (cart drawer)** avec **jauge « livraison offerte dès 50 € »**,
   quantités et suppression.
4. **Avis clients** (preuve sociale, note 4,8/5, achats vérifiés).

## Direction artistique

- Style e-commerce épuré, **fond blanc**, cartes arrondies, ombres douces, boutons pill.
- Couleurs : blanc `#FFFFFF` · encre `#0E0E12` · **prix bleu `#1B63F2`** · barré rouge `#E5342A`.
- Typo **Plus Jakarta Sans**. Thème **clair uniquement**.

## Contenu

```
maxouturbo/
└── preview/
    └── index.html   # Maquette page d'accueil (HTML/CSS/JS autonome)
```

Interactions : menu mobile, onglets modèle, panier tiroir + jauge livraison, favoris,
carrousel, hotspots, configurateur de pack, variante, sélecteur mémorisé (`localStorage`),
newsletter. Responsive. Visuels produit en **SVG placeholders** (vraies photos sur Shopify).

> Contenu, prix, marques et avis = **données de démonstration** à remplacer.

## Correspondance Shopify (pour la conversion en thème)

| Élément maquette            | Équivalent Shopify Online Store 2.0 |
|-----------------------------|-------------------------------------|
| Sélecteur véhicule          | Section custom + `collection` filtrée par métachamps (modèle/année) |
| En vedette / Support tél.   | Sections `featured-collection` (onglets = blocs collections) |
| Produit Nouveauté + variante| Section `featured-product` + `product.variants` |
| Configurateur de pack       | Section custom + `cart/add.js` (bundle / line items) |
| Panier tiroir + jauge 50 €  | `cart-drawer` + `cart.total_price` vs seuil livraison |
| Explore ton TMAX (hotspots) | Section custom avec blocs « point » (image + lien collection) |
| Avis                        | App avis (Judge.me / Loox) ou section blocks |
| Réassurance / footer        | Sections `multicolumn` + `footer` (blocks) |

## Étapes suivantes

1. Valider cette direction (50/50).
2. Décliner : page collection, fiche produit, panier, recherche.
3. **Convertir en thème Shopify** : `sections/`, `templates/*.json`, `config/settings_schema.json`,
   `locales/fr.json`, `assets/` — avec collections TMAX 560/530/500 et métachamps de compatibilité.
```
