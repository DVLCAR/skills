# TMAX Shop by MaxouTurbo — site / thème Shopify

Boutique e-commerce **TMAX Shop**, opérée par **MaxouTurbo** (atelier scooter à
Auriol / Marseille). Vente en ligne de **pièces & accessoires Yamaha TMAX** (560, 530, 500).

Approche : **~50 % repris du fonctionnement de TMAX Performance** (structure éprouvée,
analysée depuis l'export PDF de leur home) **+ ~50 % de fonctionnalités innovantes**,
le tout avec une **vraie navigation e-commerce** (méga-menus + pages collection filtrables).
Destination finale : **thème Shopify**.

## Navigation (comme un vrai site marchand)

- **Méga-menus déroulants** : clic sur « TMAX 560 / 530 / 500 » → panneau avec **toutes les
  catégories** (échappement, freinage, variateur, esthétique, entretien, support tél,
  accessoires) + une tuile promo ; clic sur « Les marques » → grille de marques.
- **Pages collection** : chaque choix ouvre une **page produits** avec **filtres**
  (catégorie, modèle, marque, prix), **tri**, fil d'ariane et compteur de résultats.
- **Menu mobile en accordéon** (tactile) reprenant la même arborescence.
- Tout est relié : sélecteur de véhicule, points « Explore ton TMAX », liens du footer et
  logo mènent aux bons écrans. Catalogue de démonstration de ~28 produits.

## Le split 50 / 50

**Repris de TMAX Performance** : barre « Paiement 4X », sélecteur véhicule, section En vedette
(onglets 560/530/500), produit Nouveauté + variante segmentée, Support téléphone en carrousel,
rangée de marques, **4 blocs réassurance**, footer À propos / Mentions légales + langue/devise,
cartes produit (prix bleu, ancien prix barré rouge, badge « Épuisé »).

**Innovant (compatible Shopify)** : **« Explore ton TMAX »** (schéma à points cliquables),
**« Compose ta prépa »** (configurateur de pack, total live, −10 %), **panier tiroir** avec
**jauge « livraison offerte 50 € »**, **avis clients vérifiés**, et la **navigation
méga-menu + collections filtrables** ci-dessus.

## Direction artistique

Fond **blanc**, cartes arrondies, ombres douces, boutons pill · encre `#0E0E12` ·
**prix bleu `#1B63F2`** · barré rouge `#E5342A` · thème clair.
**Typo (paire délibérée) :** corps en **Archivo** ; titres/hero/wordmark en **Archivo Expanded**
(grotesque industrielle large, en capitales) pour une personnalité « perf/mécanique » — les noms
de produits restent en casse normale, lisibles.

## Qualité / anti-« design IA » (audit Impeccable)

Le thème a été passé au détecteur **Impeccable** (61 règles déterministes de tics « design IA »).
Corrections appliquées : police passe-partout remplacée par une **paire délibérée Archivo / Archivo Expanded**,
**contrastes** texte AA (gris secondaire assombri), **tailles de texte** remontées au-dessus des
planchers de lisibilité (11/12 px), **ombres** resserrées (fin des ombres larges diffuses +
bord fin, un tic génératif), easing **bounce** remplacé par un ease-out exponentiel, animations de
**layout** (`max-height`, `width`) converties en `grid-template-rows` / `transform`, et retrait de
l'**eyebrow** au-dessus du titre hero. Résultat : **51 → 11 signalements**, les 11 restants étant des
faux positifs du scan statique (paddings `clamp()`/`var()` non résolus hors navigateur).

## Contenu

```
maxouturbo/
└── preview/
    └── index.html   # Maquette page d'accueil + pages collection (HTML/CSS/JS autonome)
```

Visuels produit en **SVG placeholders** (vraies photos sur Shopify). Contenu/prix = **démo**.

## Correspondance Shopify (pour la conversion en thème)

| Élément maquette              | Équivalent Shopify Online Store 2.0 |
|-------------------------------|-------------------------------------|
| Méga-menu par modèle          | `linklists` (menus) + `sections/header` mega-menu |
| Pages collection + filtres    | `templates/collection.json` + Search & Discovery (facettes) |
| Sélecteur véhicule            | Section custom + collections/métachamps modèle-année |
| En vedette / Support tél.     | Sections `featured-collection` |
| Produit Nouveauté + variante  | `featured-product` + `product.variants` |
| Configurateur de pack         | Section custom + `cart/add.js` (bundle) |
| Panier tiroir + jauge 50 €    | `cart-drawer` + `cart.total_price` |
| Explore ton TMAX (hotspots)   | Section custom (blocs point → collection) |
| Avis                          | App avis (Judge.me / Loox) |
| Réassurance / footer          | `multicolumn` + `footer` |

## Étapes suivantes

1. Valider la navigation + le design.
2. Décliner la **fiche produit** et le **panier / checkout**.
3. **Convertir en thème Shopify** : `sections/`, `templates/*.json`, `config/settings_schema.json`,
   `locales/fr.json`, `assets/`, avec collections TMAX 560/530/500 et facettes de compatibilité.
```
