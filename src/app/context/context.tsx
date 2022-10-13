import React, { createContext } from "react";

export const contentLanguages = {
  navbar: {
    navCV: {
      en: "CV",
      ua: "Резюме"
    },
    navSkills: {
      en: "My skills",
      ua: "Мої навички"
    },
    navContacts: {
      en: "Contacts",
      ua: "Контакти"
    }
  },
  home: {
    photoAndDescribe: {
      headerPhoto: {
        en: "Frontend React Developer",
        ua: "Фронтенд Реакт розробник"
      },
      cardDescribe: {
        name: {
          titleName: {
            en: "NAME:",
            ua: "ІМ'Я:"
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
            en: "PURPOSE:",
            ua: "МЕТА:"
          },
          infoPurpose: {
            en: "Create the best app in the World",
            ua: "Створити найкращий застосунок у світі"
          }
        }
      }
    },
    allInformation: {
      workExperiense: {
        en: "Work Experiense",
        ua: "Досвід роботи"
      },
      listSkills: {
        en: "List Skills",
        ua: "Мої навички"
      },
      aboutMe: {
        en: "About Me",
        ua: "Про мене"
      }
    }
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
