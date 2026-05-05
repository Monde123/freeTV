import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      hero: {
        chip: "LIVE & GRATUIT",
        title: "LA TÉLÉVISION",
        accent: "MONDIALE",
        sub: "Accédez instantanément à des milliers de chaînes gratuites du monde entier. Des listes de lecture M3U8 officielles et mises à jour en permanence.",
        stats: {
          countries: "Pays",
          channels: "Chaînes",
          legal: "Légal"
        },
        button: "Voir les playlists"
      },
      nav: {
        links: "Liens M3U8",
        guide: "Guide VLC",
        players: "Lecteurs",
        github: "GitHub ↗"
      },
      app: {
        title: "Free-TV IPTV · Télévision mondiale gratuite et officielle",
        description: "Accédez aux meilleures listes IPTV gratuites et légales. Plus de 8000 chaînes mondiales classées par pays. Liens M3U8 officiels de iptv-org.",
        keywords: "IPTV, M3U8, TV gratuite, chaînes mondiales, VLC, IPTV-org, streaming légal",
        ogTitle: "Free-TV IPTV · La télévision mondiale gratuite",
        ogDescription: "Regardez la TV gratuite du monde entier. Liens M3U8 officiels et mise à jour automatique."
      },
      playlist: {
        label: " Liens M3U8",
        title: "PLAYLISTS PAR PAYS",
        intro: "Copiez l'URL M3U8 correspondante et collez-la dans votre lecteur IPTV (VLC, TiviMate, OTT Navigator). Tous nos flux proviennent de sources officielles et sont 100% légaux.",
        universal: "Accès universel",
        copy: "Copier l'URL",
        copied: "Copié !",
        copyShort: "Copier",
        regions: {
          europe: "Europe",
          amerique: "Amériques",
          asie: "Asie",
          moyenorient: "Moyen-Orient",
          afrique: "Afrique"
        }
      },
      guide: {
        label: "Tutoriel",
        title: "COMMENT UTILISER VLC",
        step1: {
          title: "Télécharger VLC",
          desc: "Installez VLC Media Player sur votre ordinateur ou mobile depuis le site officiel."
        },
        step2: {
          title: "Ouvrir un flux réseau",
          desc: "Allez dans le menu Média > Ouvrir un flux réseau ou utilisez le raccourci (Ctrl+N)."
        },
        step3: {
          title: "Coller l'URL",
          desc: "Collez l'URL M3U8 copiée sur ce site dans le champ 'Entrer une URL réseau'."
        },
        step4: {
          title: "Profiter",
          desc: "Appuyez sur 'Lire'. Naviguez entre les chaînes via la liste de lecture (Vue > Liste de lecture)."
        }
      },
      players: {
        label: " Applications",
        title: "LECTEURS RECOMMANDÉS",
        intro: "Voici les meilleures applications pour lire vos listes M3U8 sur tous vos appareils.",
        recommended: "Recommandé",
        free: "Gratuit",
        trial: "Période d'essai",
        free_version: "Version Gratuite"
      },
      footer: {
        disclaimer: "Ce projet est un répertoire open source de flux IPTV légaux et gratuits. Nous ne diffusons aucun contenu et ne possédons aucun serveur.",
        source: "Source IPTV-org",
        report: "Signaler un lien mort",
        contribute: "Contribuer",
        builtWith: "Développé avec React & Vite."
      }
    }
  },
  en: {
    translation: {
      hero: {
        chip: "LIVE & FREE",
        title: "WORLDWIDE",
        accent: "TELEVISION",
        sub: "Instantly access thousands of free channels from around the world. Official and constantly updated M3U8 playlists.",
        stats: {
          countries: "Countries",
          channels: "Channels",
          legal: "Legal"
        },
        button: "View Playlists"
      },
      nav: {
        links: "M3U8 Links",
        guide: "VLC Guide",
        players: "Players",
        github: "GitHub ↗"
      },
      app: {
        title: "Free-TV IPTV · Free and official worldwide television",
        description: "Access the best free and legal IPTV playlists. More than 8,000 worldwide channels sorted by country. Official M3U8 links from iptv-org.",
        keywords: "IPTV, M3U8, free TV, worldwide channels, VLC, IPTV-org, legal streaming",
        ogTitle: "Free-TV IPTV · Free worldwide television",
        ogDescription: "Watch free TV from around the world. Official M3U8 links and automatic updates."
      },
      playlist: {
        label: " M3U8 Links",
        title: "PLAYLISTS BY COUNTRY",
        intro: "Copy the corresponding M3U8 URL and paste it into your IPTV player (VLC, TiviMate, OTT Navigator). All our streams come from official sources and are 100% legal.",
        universal: "Universal Access",
        copy: "Copy URL",
        copied: "Copied!",
        copyShort: "Copy",
        regions: {
          europe: "Europe",
          amerique: "Americas",
          asie: "Asia",
          moyenorient: "Middle East",
          afrique: "Africa"
        }
      },
      guide: {
        label: "Tutorial",
        title: "HOW TO USE VLC",
        step1: {
          title: "Download VLC",
          desc: "Install VLC Media Player on your computer or mobile from the official website."
        },
        step2: {
          title: "Open Network Stream",
          desc: "Go to Media > Open Network Stream or use the shortcut (Ctrl+N)."
        },
        step3: {
          title: "Paste URL",
          desc: "Paste the M3U8 URL copied from this site into the 'Enter a network URL' field."
        },
        step4: {
          title: "Enjoy",
          desc: "Press 'Play'. Navigate between channels via the playlist (View > Playlist)."
        }
      },
      players: {
        label: "Applications",
        title: "RECOMMENDED PLAYERS",
        intro: "Here are the best applications to play your M3U8 lists on all your devices.",
        recommended: "Recommended",
        free: "Free",
        trial: "Trial Period",
        free_version: "Free Version"
      },
      footer: {
        disclaimer: "This project is an open source directory of free and legal IPTV streams. We do not broadcast any content and do not own any servers.",
        source: "IPTV-org Source",
        report: "Report dead link",
        contribute: "Contribute",
        builtWith: "Built with React & Vite."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
