# Pet-Lycans 🐺🦆

Une belle application mobile React Native pour explorer et gérer vos pélicans et loups (lycans) favoris. Construite avec Expo et React Navigation, avec une interface moderne et le support du mode sombre.

## 📱 Fonctionnalités

- **Découverte d'animaux** : Parcourez une collection soigneusement sélectionnée de pélicans et de loups avec des informations détaillées
- **Filtrage intelligent** : Filtrez les animaux par type (Tous, Pélicans, Loups) avec une navigation par onglets intuitive
- **Système de favoris** : Enregistrez vos animaux favoris dans une collection personnalisée avec un stockage local persistant
- **Vues détaillées** : Consultez des informations complètes sur chaque animal incluant :
  - Des images de haute qualité
  - Des descriptions détaillées
  - Des informations sur l'habitat naturel
  - La classification du type d'animal
- **Profil utilisateur** : Personnalisez votre profil avec un pseudo personnel sauvegardé localement
- **Actualisation par glissement** : Actualisez la liste des animaux avec un simple geste de glissement vers le bas
- **Navigation fluide** : Navigation en pile native avec animations de fondu
- **Support hors ligne** : Basculement vers des données mockées lorsque l'API est indisponible

## 🚀 Démarrage

### Prérequis

- Node.js (v14 ou supérieur)
- npm ou yarn
- Expo CLI (installé globalement ou via npx)
- Simulateur iOS (pour Mac) ou Android Studio (pour le développement Android)

### Installation


1. Installez les dépendances :
```bash
npm install
```

2. Démarrez le serveur de développement Expo :
```bash
npx expo start
```

Ou utilisez les commandes spécifiques à la plateforme :
```bash
# Pour iOS
npm run ios

# Pour Android
npm run android

# Pour Web
npm run web
```

## 📂 Structure du projet

```
pet-lycans/
├── App.js                 # Composant principal de l'app avec configuration de navigation
├── app.json               # Configuration Expo
├── package.json           # Dépendances et scripts
├── src/
│   ├── components/        # Composants UI réutilisables
│   │   ├── AnimalCard.js      # Composant d'affichage de carte d'animal
│   │   ├── AnimalDetails.js   # Composant de vue détaillée d'animal
│   │   ├── FavoriteButton.js  # Bouton de bascule favori
│   │   ├── FilterButtons.js   # Composant d'onglets de filtre
│   │   ├── InfoSection.js     # Composant de section d'information
│   │   └── NicknameInput.js   # Champ de saisie de surnom pour le profil
│   ├── screens/           # Composants d'écran
│   │   ├── HomeScreen.js      # Écran d'accueil principal avec liste d'animaux
│   │   ├── DetailsScreen.js   # Écran de détails d'animal
│   │   ├── FavoritesScreen.js # Écran de collection de favoris
│   │   └── ProfileScreen.js   # Écran de profil utilisateur
│   ├── services/          # Services API et données
│   │   └── api.js             # Service de récupération de données d'animaux
│   ├── data/              # Données mockées
│   │   └── animals.js         # Données d'animaux locales
│   └── styles/            # Feuilles de style
│       ├── App.js
│       ├── components/
│       └── screens/
└── README.md
```

## 🛠 Technologies utilisées

- **React Native** (0.81.5) - Framework mobile
- **Expo** (~54.0.31) - Plateforme de développement
- **React Navigation** - Bibliothèque de navigation
  - `@react-navigation/native` - Navigation principale
  - `@react-navigation/native-stack` - Navigateur en pile
  - `@react-navigation/bottom-tabs` - Navigateur par onglets
- **AsyncStorage** - Persistance de données locale
- **React Native Safe Area Context** - Gestion des zones sûres
- **Expo Linear Gradient** - Effets de dégradé
- **React** (19.1.0) - Bibliothèque UI

## 📖 Utilisation

### Écran d'accueil
- Parcourez tous les animaux disponibles dans une liste défilable
- Utilisez les boutons de filtre en haut pour voir des types d'animaux spécifiques
- Appuyez sur n'importe quelle carte d'animal pour voir les informations détaillées
- Glissez vers le bas pour actualiser la liste des animaux
- Accédez aux écrans Favoris et Profil via les boutons en bas

### Écran de détails
- Consultez les informations complètes sur l'animal incluant l'image, la description et l'habitat
- Ajoutez ou retirez des animaux des favoris en utilisant le bouton favori
- Naviguez en arrière pour retourner à l'écran d'accueil

### Écran des favoris
- Consultez tous vos animaux favoris enregistrés
- Appuyez sur n'importe quel favori pour voir ses détails
- État vide avec message utile lorsqu'aucun favori n'existe

### Écran de profil
- Définissez et enregistrez un surnom personnel
- Le surnom est stocké localement sur votre appareil
- La validation garantit que le surnom n'est pas vide

## 🔌 Intégration API

L'application inclut un service API (`src/services/api.js`) qui :
- Tente de récupérer les données depuis un point de terminaison API externe
- Bascule vers des données mockées locales si l'API est indisponible
- Simule des délais réseau pour une expérience utilisateur réaliste
- Est actuellement configuré pour utiliser `https://api-ninjas.com/api/animals`

## 💾 Stockage des données

- **Favoris** : Stockés localement en utilisant AsyncStorage
- **Surnom du profil** : Persisté dans AsyncStorage
- Les données persistent entre les redémarrages de l'application

## 🎨 Fonctionnalités en détail

### Système de filtrage
- Trois options de filtre : Tous, Pélicans, Loups
- Filtre actif mis en évidence avec un style distinct
- Filtrage en temps réel avec optimisation de performance mémorisée

### Gestion des favoris
- Fonctionnalité d'ajout/retrait de favori en un seul appui
- Stockage persistant entre les sessions
- Synchronisation automatique entre les écrans
- Retour visuel avec indicateurs emoji

### États de chargement
- Écrans de chargement élégants avec astuces et conseils
- Indicateurs d'activité pendant la récupération des données
- Transitions fluides entre les états

## 🧪 Développement

L'application utilise le flux de travail de développement d'Expo :
- Rechargement à chaud pour des mises à jour instantanées
- Développement multiplateforme (iOS, Android, Web)
- Test facile sur appareils physiques via l'application Expo Go

## 📝 Notes

- Le nom de l'application "Pet-Lycans" est un jeu de mots combinant "pet" et "lycans" (loups)
- Inclut actuellement 6 animaux d'exemple (3 pélicans, 3 loups)
- Toutes les images proviennent d'Unsplash
- L'application est configurée pour l'orientation portrait


## 📄 Licence

Ce projet est privé.

---

Fait avec ❤️ en utilisant React Native et Expo

Par Romain LIÉNARD, Romain LEFEVRE, Marco Rafaël SALGADO SOARES DE FARIA et Hyndi FANNIR
