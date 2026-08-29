# MaxouTurbo — projet site / thème Shopify

Site & boutique pour **MaxouTurbo** — atelier scooter & moto à **Auriol (13390),
près de Marseille** (« MAXOUTURBO MOTOCYCLE / GAE RACING »).

L'entreprise fait à la fois :

- **Atelier / services** — entretien & réparation (toutes marques), **préparation
  moteur**, cartographie/reprogrammation, **banc de puissance**, **covering** & kits carénage.
- **Boutique** — vente de pièces performance & détachées.
- **Occasions** — vente de scooters d'occasion révisés.

Spécialité forte : **TMAX / Yamaha** (TMAX, XMAX, NMAX), du 50 cc au maxi-scooter.

> Projet inspiré du *fonctionnement* de sites spécialisés (navigation par machine,
> mise en avant des marques, réassurance) mais avec l'identité propre de MaxouTurbo.

## Direction artistique

- **Concept** : « minimalisme d'ingénieur » — l'atelier de prépa traité comme un plan technique.
- **Style** : épuré & moderne, fond clair, beaucoup d'espace.
- **Couleurs** : papier `#FBFBF9` · graphite `#16171A` · gris froid `#565962` ·
  filet `#E6E5DF` · accent « turbo / titane brûlé » `#FF4A17` · vert stock `#1E874B`.
- **Typographies** : *Archivo* (titres) · *Hanken Grotesk* (texte) · *IBM Plex Mono* (réf., cotes, prix).
- **Signature** : hero = **courbe de banc de puissance** (avant/après) ; illustrations en dessin technique SVG (aucune image externe).

## Contenu

```
maxouturbo/
└── preview/
    └── index.html   # Maquette de la page d'accueil (HTML/CSS/JS autonome)
```

### `preview/index.html`

Maquette statique et autonome de la page d'accueil. Sections :
barre d'annonce · header (Atelier / Boutique / Occasions / Contact + « Devis gratuit ») ·
hero (courbe dyno) · **atelier & services** (6 prestations + CTA devis) · réassurance ·
sélecteur « trouve les pièces de ta machine » (multi-marques) · **boutique** (grille à
onglets best-sellers / nouveautés / promos) · **occasions** (3 scooters) · marques ·
« pourquoi MaxouTurbo » + stats · avis clients · **contact & horaires** (Auriol) · newsletter · footer.

Interactions : menu mobile, onglets produits, ajout au panier (compteur + toast),
sélecteur de machine (mémorisé via `localStorage`), inscription newsletter.
Thème clair/sombre géré via tokens CSS. Responsive.

> Contenu, prix, coordonnées et avis = **données de démonstration** à remplacer par les vraies infos.

## Étapes suivantes (proposées)

1. Valider la direction visuelle sur la page d'accueil.
2. Décliner : page atelier/services (avec formulaire de devis / prise de RDV),
   page collection, page produit, page occasion, panier.
3. Convertir en **thème Shopify Online Store 2.0** (Liquid : `sections/`, `templates/`,
   `blocks`, `config/settings_schema.json`, `locales/`, `assets/`) + app RDV/devis pour l'atelier.
```
