# Développement Mobile : Notes Résumées

---

## Android vs iOS

### Android

- Non spécifique à un constructeur (Samsung, Xiaomi, etc.)
- Meilleure accessibilité car l’iPhone est vu comme un objet de luxe
- Android domine le marché mondial
- Recommandé de tester sur un téléphone peu performant pour assurer une compatibilité maximale

### iOS

- Nécessite un Mac et Xcode pour développer
- Langages utilisés :
  - Swift
  - Objective-C
- Revenus en général plus élevés sur iOS
- Matériel Apple requis pour le déploiement
- Avantages :
  - Système unifié
  - Moins de fragmentation
  - Les utilisateurs dépensent plus facilement
- Inconvénients :
  - Beaucoup de restrictions de sécurité
  - Environnement de développement plus fermé

---

## Développement Natif vs Cross Platform vs Hybride

### Développement Natif

- iOS : Swift / Objective-C
- Android : Kotlin / Java
- Performances maximales
- Coût élevé : deux fois plus de temps ou de budget
- Recommandé pour les applications critiques en performance

### Cross Platform

- Technologies : React Native, Flutter
- Un seul langage pour plusieurs plateformes (JavaScript, Dart)
- Application compilée en natif
- Moins de complexité que le natif avec de bonnes performances
- Idéal pour les projets qui doivent être réalisés rapidement et efficacement

### Hybride

- Technologies web : HTML, CSS, JS
- Moins performant
- Plus adapté aux applications web mobiles (PWA)

---

## PWA (Progressive Web App)

- Réponse du web au besoin mobile
- Permet une expérience mobile sans passer par les stores
- Moins de contraintes que le natif

---

## Environnement de Développement

### Outils nécessaires

- Node.js version 20 ou plus
- npm : gestionnaire de paquets
- Expo CLI : outil de gestion pour React Native
  ```bash
  npm install -g expo-cli
