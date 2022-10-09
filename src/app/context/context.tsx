import React, { createContext } from "react";

export const contentLanguages = {
  navbar: {
    navHome: {
      en: "",
      ua: ""
    },
    navSkills: {
      en: "",
      ua: ""
    },
    navContacts: {
      en: "",
      ua: ""
    }
  },
  home: {
    photoAndDescribe: {
      headerPhoto: {
        en: "",
        ua: ""
      },
      cardDescribe: {
        name: {
          titleName: {
            en: "NAME",
            ua: "ІМ'Я"
          },
          infoName: {
            "en": "Dmytro VORONOV",
            "ua": "Дмитро Воронов"
          }
        },
        city: {
          titleCity: {
            en: "CITY:",
            ua: "МІСТО:"
          },
          infoCity: {
            en: "Kyiv",
            ua: "Київ"
          }
        },
        purpose: {
          titlePurpose: {
            en: "PURPOSE",
            ua: "МЕТА"
          },
          infoPurpose: {
            en: "Create the best app in the World",
            ua: "Створити найкращий застосунок у світі"
          }
        }
      }
    },
    allInformation: {}
  },
  skills: {
    en: "",
    ua: ""
  },
  contacts: {
    en: "",
    ua: ""
  }
};

export const LanguageContext = createContext(contentLanguages);
