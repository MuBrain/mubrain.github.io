import type { TranslationKeys } from './en';

/**
 * French Canadian translations
 */
export const fr: TranslationKeys = {
  // Site
  site: {
    name: 'MuBrain',
    description:
      'MuBrain est un espace de réflexion, de publication et de structuration de la connaissance autour de l’intelligence artificielle, des agents et des organisations apprenantes.',
  },

  // Navigation
  nav: {
    home: 'Accueil',
    about: 'À propos',
    blog: 'Blog',
    contact: 'Contact',
    features: 'Axes',
    components: 'Composants',
    docs: 'Documentation',
    getStarted: 'Lire',
    faq: 'FAQ',
  },

  // Common
  common: {
    readMore: 'Lire la suite',
    loading: 'Chargement...',
    error: 'Une erreur est survenue',
    notFound: 'Page non trouvée',
    backHome: "Retour à l’accueil",
    copied: 'Copié !',
    copy: 'Copier',
  },

  // Hero Section
  hero: {
    badge: 'Base MuBrain en construction',
    title: 'Structurer la connaissance',
    titleHighlight: 'pour les humains et les agents IA.',
    description:
      'MuBrain explore comment documenter, versionner, publier et réutiliser la connaissance avec GitHub, Astro, OKF et des agents IA, sans perdre la maîtrise humaine du sens.',
    cta: 'Lire',
    github: 'Voir le dépôt',
    socialProof: 'Une base documentaire pensée pour les humains, GitHub, Astro et les agents IA.',
  },

  // Tech Stack Section
  techStack: {
    astro: {
      name: 'Astro',
      desc: 'Site statique rapide et maintenable',
    },
    tailwind: {
      name: 'Tailwind CSS',
      desc: 'Système visuel flexible et léger',
    },
    typescript: {
      name: 'TypeScript',
      desc: 'Structure plus fiable pour le code',
    },
    motion: {
      name: 'GitHub',
      desc: 'Versionnement du site et de la connaissance',
    },
  },

  // Feature Tabs Section
  features: {
    sectionTitle: 'Une base de connaissance',
    sectionTitleHighlight: 'avant d’être un simple site.',
    sectionDescription:
      'MuBrain sépare clairement le contenu public, la connaissance de référence, les méthodes de travail et les décisions structurantes.',
    tabs: {
      design: {
        label: 'Structure',
        desc: 'Markdown, YAML et conventions',
        title: 'Une connaissance lisible et réutilisable',
        content:
          'La base MuBrain s’appuie sur des fichiers Markdown enrichis par du frontmatter YAML afin de rester lisible dans GitHub et exploitable par des agents IA.',
      },
      seo: {
        label: 'Publication',
        desc: 'Astro, SEO et contenu public',
        title: 'Une publication sobre et durable',
        content:
          'Astro permet de publier un site statique rapide tout en gardant une séparation claire entre les articles publics et la base de connaissance de référence.',
      },
      perf: {
        label: 'Maintenabilité',
        desc: 'Git, branches et validation',
        title: 'Des changements versionnés et vérifiables',
        content:
          'Chaque évolution importante peut être travaillée dans une branche Git, validée par un build, puis fusionnée proprement vers la branche stable.',
      },
      components: {
        label: 'Composants',
        desc: 'Interface réutilisable',
        title: 'Des composants au service du contenu',
        content:
          'Les composants visuels servent à présenter clairement les idées, mais la priorité de MuBrain reste la structure de la connaissance et la qualité éditoriale.',
      },
      i18n: {
        label: 'Bilinguisme',
        desc: 'fr-CA source, en-CA traduction',
        title: 'Le français canadien comme source de vérité',
        content:
          'Les contenus de référence sont d’abord produits en français canadien. Les versions anglaises peuvent être assistées par IA, mais doivent être validées humainement.',
      },
    },
  },

  // Credibility Section
  credibility: {
    badge: 'Méthode documentée',
    title: 'Une structure pensée pour durer,',
    titleHighlight: 'pas seulement pour publier',
    paragraph1:
      'MuBrain part du constat qu’un site web ne suffit plus. Les idées, les méthodes et les décisions doivent être conservées dans une structure exploitable à long terme.',
    paragraph2:
      'Le projet combine Astro, GitHub, une base OKF / LLM-WIKI et des conventions de rédaction pour créer un socle documentaire utilisable par des humains et des agents IA.',
    stats: {
      lighthouse: {
        score: 'Structuré',
        label: 'Connaissance versionnée',
      },
      delivery: {
        days: 'GitHub',
        label: 'Historique des décisions',
      },
    },
    standard: {
      title: 'Les principes MuBrain',
      items: [
        'Français canadien comme source de vérité',
        'Markdown et YAML pour la connaissance de référence',
        'Séparation entre site public et base OKF',
        'Validation humaine des traductions anglaises',
      ],
    },
    testimonial: {
      quote:
        '"Une base de connaissance utile doit pouvoir être lue, comprise, versionnée et réutilisée."',
      author: '— Principe MuBrain',
    },
  },

  // CTA Section
  cta: {
    title: 'Lire, structurer,',
    titleHighlight: 'réutiliser.',
    description:
      'MuBrain documente une manière de publier et de maintenir la connaissance pour qu’elle reste utile aux humains, aux organisations et aux agents IA.',
    docs: 'Explorer le blog',
    command: 'git clone https://github.com/MuBrain/mubrain.github.io',
  },

  // Footer
  footer: {
    copyright: '© {year} MuBrain. Tous droits réservés.',
    madeWith: 'Construit avec',
    maintainedBy: 'Maintenu par',
    links: {
      documentation: 'Blog',
      github: 'GitHub',
      blog: 'Blog',
      contact: 'Contact',
      license: 'Licence',
    },
  },

  // Home page
  home: {
    title: 'Bienvenue sur MuBrain',
    subtitle:
      'Une base de connaissance et un site pour explorer l’intelligence artificielle, les agents et la structuration du savoir.',
    cta: 'Lire',
  },

  // About page
  about: {
    meta: {
      title: 'À propos',
      description:
        'Découvrez MuBrain, sa base de connaissance structurée et son approche centrée sur les humains, les agents IA et les organisations apprenantes.',
    },
    hero: {
      badge: 'À propos',
      title: 'Documenter la connaissance,',
      titleHighlight: 'pas seulement la publier.',
      description:
        'MuBrain est un espace de réflexion, de documentation et d’expérimentation autour de l’intelligence artificielle, des agents, du doc-as-code et des bases de connaissance.',
    },
    mission: {
      title: 'Mission',
      description:
        'Aider à structurer la connaissance de façon durable, lisible par les humains, maintenable dans GitHub et réutilisable par des agents IA.',
    },
    values: {
      title: 'Principes',
      performance: {
        title: 'Clarté avant complexité',
        description:
          'Chaque contenu doit être compréhensible sans dépendre d’un contexte implicite ou d’une personne qui seule saurait l’expliquer.',
      },
      simplicity: {
        title: 'Structure avant décoration',
        description:
          'MuBrain privilégie les conventions simples, les fichiers lisibles et les décisions explicites plutôt que les effets visuels inutiles.',
      },
      openSource: {
        title: 'Traçabilité',
        description:
          'GitHub permet de conserver l’historique du site, des contenus, des décisions et de la base de connaissance.',
      },
    },
  },

  // Contact page
  contact: {
    meta: {
      title: 'Contact',
      description:
        'Contacter MuBrain ou suivre le projet à travers le dépôt GitHub et les publications publiques.',
    },
    hero: {
      badge: 'Contact',
      title: 'Échanger autour',
      titleHighlight: 'de MuBrain.',
      description:
        'MuBrain est en construction progressive. Le point d’entrée le plus stable reste le dépôt GitHub et les publications associées au projet.',
    },
    form: {
      title: 'Envoyer un message',
      name: 'Nom',
      namePlaceholder: 'Votre nom',
      email: 'Adresse courriel',
      emailPlaceholder: 'vous@exemple.ca',
      subject: 'Sujet',
      subjectPlaceholder: 'Sujet de votre message',
      message: 'Message',
      messagePlaceholder:
        'Expliquez brièvement votre question, votre idée ou le contexte de votre demande.',
      submit: 'Envoyer le message',
      sending: 'Envoi en cours...',
      success: 'Message envoyé avec succès.',
      error: 'Échec de l’envoi du message. Veuillez réessayer plus tard.',
    },
    info: {
      title: 'Autres points d’entrée',
      email: {
        label: 'Courriel',
        value: 'À préciser',
      },
      github: {
        label: 'GitHub',
        value: 'github.com/MuBrain/mubrain.github.io',
      },
      twitter: {
        label: 'Réseaux sociaux',
        value: 'À préciser',
      },
    },
  },

  // Forms
  form: {
    name: 'Nom',
    email: 'Courriel',
    message: 'Message',
    submit: 'Envoyer',
    sending: 'Envoi en cours...',
    success: 'Message envoyé avec succès !',
    error: 'Échec de l’envoi du message. Veuillez réessayer.',
  },

  // Blog
  blog: {
    title: 'Blog',
    description: 'Articles, réflexions et mises à jour autour de MuBrain',
    allPosts: 'Tous les articles',
    featured: 'À la une',
    noPosts: 'Aucun article trouvé',
    relatedPosts: 'Articles connexes',
    backToBlog: 'Retour au blog',
    subscribe: "S’abonner",
    subscribeDescription:
      'Recevez les prochains articles et mises à jour de MuBrain.',
    emailPlaceholder: 'Entrez votre courriel',
    subscribeButton: "S’abonner",
  },

  // Components Page
  components: {
    meta: {
      title: 'Composants',
      description:
        'Référence interne des composants visuels utilisés par MuBrain pour construire une interface claire, accessible et maintenable.',
    },
    hero: {
      badge: 'Composants internes',
      title: 'Bibliothèque de',
      titleHighlight: 'composants',
      description:
        'Les composants servent à construire les pages MuBrain de manière cohérente. Ils ne sont pas l’objet principal du site, mais soutiennent la lisibilité du contenu.',
      browseComponents: 'Explorer les composants',
      viewSource: 'Voir le code',
    },
    categories: {
      buttons: 'Boutons',
      inputs: 'Champs de formulaire',
      feedback: 'Retour utilisateur',
      overlays: 'Superpositions',
      data: 'Affichage de données',
      loading: 'Chargement',
    },
    sections: {
      buttons: {
        title: 'Boutons',
        description:
          'Éléments interactifs utilisés pour guider la navigation, les actions principales et les liens importants.',
        variants: 'Variantes',
        variantsHint: 'Styles adaptés à différents contextes',
        sizes: 'Tailles',
        sizesHint: 'Mise à l’échelle selon le contexte',
        states: 'États',
        withIcons: 'Avec icônes',
        primary: 'Primaire',
        secondary: 'Secondaire',
        outline: 'Contour',
        ghost: 'Discret',
        link: 'Lien',
        destructive: 'Destructif',
        small: 'Petit',
        medium: 'Moyen',
        large: 'Grand',
        default: 'Par défaut',
        loading: 'Chargement',
        disabled: 'Désactivé',
        send: 'Envoyer',
        export: 'Exporter',
        star: 'Favori',
      },
      inputs: {
        title: 'Champs de formulaire',
        description:
          'Champs de texte, zones de saisie, sélecteurs et contrôles utilisés pour les interactions de base.',
        textInput: 'Champ de texte',
        textInputHint: 'Avec libellé et aide contextuelle',
        textarea: 'Zone de texte',
        textareaHint: 'Saisie de texte multiligne',
        select: 'Sélecteur',
        selectHint: 'Liste déroulante native',
        checkboxes: 'Cases à cocher',
        checkboxesHint: 'Contrôles de sélection multiple',
        planSelection: 'Sélection d’option',
        planSelectionHint: 'Présentation sous forme de carte',
        emailLabel: 'Adresse courriel',
        emailPlaceholder: 'vous@exemple.ca',
        passwordLabel: 'Mot de passe',
        passwordPlaceholder: '••••••••',
        passwordHint: 'Minimum 8 caractères',
        disabledLabel: 'Désactivé',
        disabledPlaceholder: 'Non modifiable',
        messageLabel: 'Message',
        messagePlaceholder: 'Écrivez votre message ici...',
        messageHint: 'Supporte le texte structuré',
        countryLabel: 'Pays',
        selectCountry: 'Sélectionnez un pays...',
        termsLabel: 'J’accepte les conditions d’utilisation',
        updatesLabel: 'M’envoyer les mises à jour',
        notificationsLabel: 'Activer les notifications',
        notificationsDesc:
          'Recevoir des alertes pour les mises à jour importantes',
        planFree: 'Base',
        planFreeDesc: 'Fonctionnalités de base pour explorer le projet',
        planPro: 'Avancé',
        planProDesc: 'Fonctions avancées pour structurer et publier',
        planTeam: 'Équipe',
        planTeamDesc: 'Fonctions de collaboration pour les équipes',
      },
      feedback: {
        title: 'Retour utilisateur',
        description:
          'Badges, alertes et indicateurs d’état pour communiquer clairement les informations importantes.',
        badges: 'Badges',
        badgesHint: 'Indicateurs d’état',
        alerts: 'Alertes',
        alertsHint: 'Messages contextuels',
        default: 'Par défaut',
        success: 'Succès',
        warning: 'Avertissement',
        error: 'Erreur',
        info: 'Info',
        tipTitle: 'Astuce',
        tipContent:
          'Utilisez les raccourcis clavier pour naviguer plus rapidement. Appuyez sur',
        tipKey: '⌘K',
        tipEnd: 'pour ouvrir la palette de commandes.',
        deployTitle: 'Déploiement réussi',
        deployContent: 'Vos modifications sont en ligne sur',
        limitTitle: 'Limite approchant',
        limitContent:
          'Vous avez utilisé une grande partie de votre quota. Envisagez d’ajuster votre configuration.',
        buildTitle: 'Build échoué',
        buildContent: 'Erreur dans',
        buildError: '— propriété requise manquante',
      },
      overlays: {
        title: 'Superpositions',
        description:
          'Dialogues, menus déroulants, infobulles et onglets pour organiser l’information et les actions secondaires.',
        dialog: 'Dialogue',
        dialogHint: 'Superposition modale',
        dropdown: 'Menu',
        dropdownHint: 'Menu d’actions',
        tooltips: 'Infobulles',
        tooltipsHint: 'Indices contextuels',
        tabs: 'Onglets',
        tabsHint: 'Organisation du contenu',
        openDialog: 'Ouvrir le dialogue',
        deleteTitle: 'Supprimer l’élément ?',
        deleteDesc: 'Cette action ne peut pas être annulée.',
        deleteConfirm: 'Êtes-vous sûr de vouloir supprimer',
        deleteWarning:
          'Les fichiers, déploiements et données associés seront définitivement supprimés.',
        cancel: 'Annuler',
        deleteProject: 'Supprimer le projet',
        actions: 'Actions',
        edit: 'Modifier',
        duplicate: 'Dupliquer',
        share: 'Partager',
        archive: 'Archiver',
        delete: 'Supprimer',
        top: 'Haut',
        bottom: 'Bas',
        left: 'Gauche',
        right: 'Droite',
        tooltipTop: 'Infobulle en haut',
        tooltipBottom: 'Infobulle en bas',
        tooltipLeft: 'Infobulle à gauche',
        tooltipRight: 'Infobulle à droite',
        overview: 'Aperçu',
        analytics: 'Analyse',
        settings: 'Paramètres',
        overviewContent:
          'Aperçu avec informations clés et activité récente. Les onglets prennent en charge la navigation au clavier.',
        analyticsContent:
          'Données d’analyse avec indicateurs et informations de performance.',
        settingsContent:
          'Configurez les paramètres du projet. Utilisez Début et Fin pour naviguer rapidement entre les onglets.',
      },
      data: {
        title: 'Affichage de données',
        description:
          'Cartes, avatars et icônes pour présenter clairement les contenus, les indicateurs et les informations utiles.',
        cards: 'Cartes',
        cardsHint: 'Conteneurs de contenu',
        avatars: 'Avatars',
        avatarsHint: 'Représentations d’utilisateurs',
        icons: 'Icônes',
        iconsHint: 'Jeu d’icônes utilisé dans l’interface',
        stacked: 'Empilés',
        performance: 'Performance',
        performanceScore: 'Site statique',
        performanceDesc:
          'Astro permet de publier un site rapide, léger et facile à déployer sur GitHub Pages.',
        typeSafe: 'Typé',
        typeSafeScore: 'TypeScript',
        typeSafeDesc:
          'Le typage aide à limiter les erreurs et à rendre les composants plus maintenables.',
        i18nReady: 'Bilingue',
        i18nScore: 'fr-CA / en-CA',
        i18nDesc:
          'Le français canadien est la source de vérité, l’anglais canadien est une traduction validée.',
      },
      loading: {
        title: 'Chargement',
        description:
          'États de chargement pour améliorer la perception de fluidité lors de l’affichage du contenu.',
        skeletonTypes: 'Types de squelettes',
        skeletonTypesHint: 'Texte, cercle, rectangle',
        cardSkeleton: 'Squelette de carte',
        cardSkeletonHint: 'État de chargement composé',
      },
    },
    cta: {
      title: 'Construire une interface claire',
      description:
        'Les composants servent à soutenir la lisibilité du contenu MuBrain et à conserver une expérience cohérente.',
      cloneRepo: 'Ouvrir le dépôt',
      readDocs: 'Lire la documentation',
    },
  },

  // Consent Banner
  consent: {
    heading: 'Préférences de confidentialité',
    description:
      'Nous utilisons certains paramètres pour améliorer l’expérience de navigation et comprendre l’usage du site lorsque ces options sont activées.',
    acceptAll: 'Tout accepter',
    declineAll: 'Tout refuser',
    customize: 'Personnaliser',
    savePreferences: 'Enregistrer les préférences',
    settingsHeading: 'Paramètres de confidentialité',
    privacyPolicyLabel: 'Politique de confidentialité',
    alwaysOn: 'Toujours actif',
  },

  // Faq page
  faq: {
    title: 'FAQ',
    description:
      'Questions fréquentes sur MuBrain, sa base OKF, son approche bilingue et son usage avec des agents IA.',
  },
} as const;