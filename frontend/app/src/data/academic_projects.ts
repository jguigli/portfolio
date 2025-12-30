import type { Project } from '../types/project';

export const academicProjects: Project[] = [
  {
    title: "Hypertube",
    tagline: {
      fr: "Application web de streaming vidéo",
      en: "Video streaming web application"
    },
    description: {
      fr: "Application web de streaming vidéo utilisant Libtorrent et FFmpeg.",
      en: "Video streaming web application using Libtorrent and FFmpeg."
    },
    image: "./hypertube.png",
    status: "Terminé",
    techStack: ["FastAPI", "NodeJS", "React", "TypeScript", "Tailwind CSS", "Libtorrent", "FFmpeg"],
    features: [
      {
        fr: "Streaming de vidéos",
        en: "Video streaming"
      },
      {
        fr: "Gestion des utilisateurs",
        en: "User management"
      },
      {
        fr: "Stockage éphémère des vidéos",
        en: "Ephemeral video storage"
      },
      {
        fr: "Téléchargement de vidéos",
        en: "Video downloading"
      },
    ],
    repoUrl: "https://github.com/jguigli/hypertube"
  },
  {
    title: "Cloud-1",
    tagline: {
      fr: "Déploiement automatisé",
      en: "Automated deployment"
    },
    description: {
      fr: "Déploiement automatisé d'infrastructures cloud avec Ansible.",
      en: "Automated deployment of cloud infrastructures with Ansible."
    },
    image: "",
    status: "Terminé",
    techStack: ["Ansible", "Docker"],
    features: [
      {
        fr: "Déploiement automatisé d'infrastructures cloud",
        en: "Automated cloud infrastructure deployment"
      },
      {
        fr: "Playbook de déploiement",
        en: "Deployment playbook"
      },
    ],
    repoUrl: "https://github.com/jguigli/cloud-1"
  },
  {
    title: "Leafflication",
    tagline: {
      fr: "Réseau de neurones convolutif",
      en: "Convolutional neural network"
    },
    description: {
      fr: "Réseau de neurones convolutif pour la détection de maladies sur des feuilles de plantes avec TensorFlow.",
      en: "Convolutional neural network for disease detection on plant leaves with TensorFlow."
    },
    image: "",
    status: "Terminé",
    techStack: ["Python", "TensorFlow"],
    features: [
      {
        fr: "Détection de maladies sur des feuilles de plantes",
        en: "Disease detection on plant leaves"
      },
      {
        fr: "Traitement des données",
        en: "Data processing"
      },
    ],
    repoUrl: "https://github.com/TMdoubleGit/leaffliction"
  },
  {
    title: "Multilayer Perceptron",
    tagline: {
      fr: "Réseau de neurones",
      en: "Neural network"
    },
    description: {
      fr: "Réseau de neurones implémenté 'from scratch' pour des tâches de classification.",
      en: "Neural network implemented 'from scratch' for classification tasks."
    },
    image: "",
    status: "Terminé",
    techStack: ["Python", "NumPy", "Pandas", "Matplotlib", "scikit-learn"],
    features: [
      {
        fr: "Séparation et exportation des jeux de données pour l'entraînement et la validation.",
        en: "Separation and export of datasets for training and validation."
      },
      {
        fr: "Couches configurables avec fonctions d'activation ReLU et Softmax.",
        en: "Configurable layers with ReLU and Softmax activation functions."
      },
      {
        fr: "Prise en charge de l'early stopping, du décroissance du taux d'apprentissage et de la régularisation.",
        en: "Support for early stopping, learning rate decay and regularization."
      },
      {
        fr: "Calcul de la précision et de la perte sur les jeux de validation.",
        en: "Calculation of accuracy and loss on validation sets."
      },
      {
        fr: "Chargement d'un modèle entraîné pour réaliser des prédictions sur de nouvelles données.",
        en: "Loading a trained model to make predictions on new data."
      },
      {
        fr: "Sauvegarde des métriques d'entraînement et de validation pour analyse.",
        en: "Saving training and validation metrics for analysis."
      },
    ],
    repoUrl: "https://github.com/jguigli/multilayer-perceptron"
  },
  {
    title: "DSLR",
    tagline: {
      fr: "Regression logistique",
      en: "Logistic regression"
    },
    description: {
      fr: "Regression logistique implémenté 'from scratch' pour des tâches de classification.",
      en: "Logistic regression implemented 'from scratch' for classification tasks."
    },
    image: "",
    status: "Terminé",
    techStack: ["Python", "NumPy", "Pandas", "Matplotlib", "seaborn"],
    features: [
      {
        fr: "Chargement et sauvegarde de fichiers CSV en toute simplicité.",
        en: "Easy loading and saving of CSV files."
      },
      {
        fr: "Analyse statistique de jeux de données.",
        en: "Statistical analysis of datasets."
      },
      {
        fr: "Entraînement de modèles de régression logistique avec différents algorithmes de descente de gradient.",
        en: "Training logistic regression models with different gradient descent algorithms."
      },
      {
        fr: "Visualisation des données avec des nuages de points, des matrices de dispersion et des histogrammes.",
        en: "Data visualization with scatter plots, scatter matrices and histograms."
      },
    ],
    repoUrl: "https://github.com/jguigli/dslr"
  },
  {
    title: "Red Tetris",
    tagline: {
      fr: "Jeu de Tetris",
      en: "Tetris game"
    },
    description: {
      fr: "Jeu de Tetris implémenté 'from scratch' en JavaScript.",
      en: "Tetris game implemented 'from scratch' in JavaScript."
    },
    image: "./red-tetris.png",
    status: "Terminé",
    techStack: ["JavaScript", "React", "Redux", "Node.js", "Socket.io"],
    features: [
      {
        fr: "Jeu de Tetris classique",
        en: "Classic Tetris game"
      },
      {
        fr: "Multiplayer",
        en: "Multiplayer"
      },
      {
        fr: "Score",
        en: "Score"
      },
    ],
    repoUrl: "https://github.com/jguigli/red_tetris"
  },
  {
    title: "Abstract Data",
    tagline: {
      fr: "Containers de la STL",
      en: "STL containers"
    },
    description: {
      fr: "Implémentation des containers de la STL C++ 'from scratch'. (Branche abstract_data)",
      en: "Implementation of C++ STL containers 'from scratch'. (abstract_data branch)"
    },
    image: "",
    status: "Terminé",
    techStack: ["C++ 98", "C++ 11", "STL"],
    features: [
      {
        fr: "Séquence : Vector, Deque, List",
        en: "Sequence: Vector, Deque, List"
      },
      {
        fr: "Associatif : Map, Set",
        en: "Associative: Map, Set"
      },
      {
        fr: "Adaptateur : Queue, Stack, Priority Queue",
        en: "Adapter: Queue, Stack, Priority Queue"
      },
    ],
    repoUrl: "https://github.com/jguigli/ft_containers"
  },
  {
    title: "IoT",
    tagline: {
      fr: "Kubernetes",
      en: "Kubernetes"
    },
    description: {
      fr: "Déploiement de cluster Kubernetes k3s via k3d.",
      en: "Kubernetes k3s cluster deployment via k3d."
    },
    image: "",
    status: "Terminé",
    techStack: ["Vagrant", "VirtualBox", "Kubernetes", "k3d", "ArgoCD", "GitLab"],
    features: [
      {
        fr: "Environnement de développement automatisé avec Vagrant.",
        en: "Automated development environment with Vagrant."
      },
      {
        fr: "Déploiement d'un cluster Kubernetes k3s via k3d.",
        en: "Deployment of a Kubernetes k3s cluster via k3d."
      },
      {
        fr: "Intégration et déploiement continue GitOps avec ArgoCD.",
        en: "GitOps continuous integration and deployment with ArgoCD."
      },
      {
        fr: "Déploiement et gestion de GitLab.",
        en: "GitLab deployment and management."
      },
    ],
    repoUrl: "https://github.com/jguigli/iot"
  },
  {
    title: "Cub3d",
    tagline: {
      fr: "Jeu 3D inspiré de Wolfenstein 3D",
      en: "3D game inspired by Wolfenstein 3D"
    },
    description: {
      fr: "Cub3D est un moteur de jeu 3D inspiré du classique Wolfenstein 3D. Il utilise le raycasting pour afficher un environnement 3D à partir d'une carte 2D.",
      en: "Cub3D is a 3D game engine inspired by the classic Wolfenstein 3D. It uses raycasting to display a 3D environment from a 2D map."
    },
    image: "",
    status: "Terminé",
    techStack: ["C", "Minilibx"],
    features: [
      {
        fr: "Rendu 3D en temps réel avec raycasting",
        en: "Real-time 3D rendering with raycasting"
      },
      {
        fr: "Mapping de textures pour les murs",
        en: "Texture mapping for walls"
      },
      {
        fr: "Déplacement et interaction basiques du joueur",
        en: "Basic player movement and interaction"
      },
      {
        fr: "Affichage d'une mini-carte",
        en: "Mini-map display"
      },
    ],
    repoUrl: "https://github.com/jguigli/cub3d"
  },
  {
    title: "Minishell",
    tagline: {
      fr: "Shell Unix",
      en: "Unix shell"
    },
    description: {
      fr: "Minishell est une implémentation simple d'un shell Unix en C. Il permet d'exécuter des commandes, de gérer les variables d'environnement et offre des fonctionnalités essentielles d'un interpréteur de commandes.",
      en: "Minishell is a simple implementation of a Unix shell in C. It allows executing commands, managing environment variables and provides essential features of a command interpreter."
    },
    image: "",
    status: "Terminé",
    techStack: ["C"],
    features: [
      {
        fr: "Exécution des commandes avec gestion des pipes et des redirections.",
        en: "Command execution with pipe and redirection management."
      },
      {
        fr: "Commandes intégrées : cd, echo, env, exit, export, pwd, unset.",
        en: "Built-in commands: cd, echo, env, exit, export, pwd, unset."
      },
      {
        fr: "Gestion des variables d'environnement.",
        en: "Environment variable management."
      },
      {
        fr: "Gestion des signaux pour une utilisation interactive.",
        en: "Signal handling for interactive use."
      },
      {
        fr: "Gestion des erreurs courantes du shell.",
        en: "Common shell error handling."
      },
    ],
    repoUrl: "https://github.com/jguigli/minishell"
  },
  {
    title: "Libasm",
    tagline: {
      fr: "Bibliothèque d'assembleur",
      en: "Assembly library"
    },
    description: {
      fr: "Ce projet propose une collection de fonctions en assembleur pour la manipulation de chaînes de caractères et d'opérations sur les listes chaînées, accompagnée d'une suite de tests en C pour démontrer leur fonctionnement.",
      en: "This project provides a collection of assembly functions for string manipulation and linked list operations, accompanied by a C test suite to demonstrate their functionality."
    },
    image: "",
    status: "Terminé",
    techStack: ["C"],
    features: [
      {
        fr: "Fonctions de chaînes de caractères : ft_strcmp, ft_strcpy, ft_strdup, ft_strlen, ft_read, ft_write, ft_atoi_base.",
        en: "String functions: ft_strcmp, ft_strcpy, ft_strdup, ft_strlen, ft_read, ft_write, ft_atoi_base."
      },
      {
        fr: "Fonctions sur les listes chaînées : ft_list_push_front, ft_list_size, ft_list_sort, ft_list_remove_if.",
        en: "Linked list functions: ft_list_push_front, ft_list_size, ft_list_sort, ft_list_remove_if."
      },
    ],
    repoUrl: "https://github.com/jguigli/libasm"
  },
];
