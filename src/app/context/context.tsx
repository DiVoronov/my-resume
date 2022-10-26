import React, { createContext } from "react";

export const contentLanguages = {
  navbar: {
    navCV: {
      en: "CV",
      ua: "Резюме"
    },
    navAboutApp: {
      en: "About App",
      ua: "Про Додаток"
    },
    navContacts: {
      en: "Contacts",
      ua: "Контакти"
    }
  },
  home: {
    photoAndDescribe: {
      headerPhoto: {
        en: "Welcome! I'm Dmytro Voronov, 27 y.o.",
        ua: "Вітаю! Я Дмитро Воронов, 27 р."
      },
      cardDescribe: {
          en: [
            {index: 0, type: "h", value: "SPECIALIZATION:"},
            {index: 1, type: "p", value: "Frontend React Developer"},
            {index: 2, type: "h", value: "CITY:"},
            {index: 3, type: "p", value: "Kyiv"},
            {index: 4, type: "h", value: "PURPOSE:"},
            {index: 5, type: "p", value: "By the age of thirty, enter the TOP-10 professionals in the field of commercial development of complex web products in Ukraine"}
          ],
          ua: [
            {index: 0, type: "h", value: "СПЕЦІАЛІЗАЦІЯ:"},
            {index: 1, type: "p", value: "Фронтенд React розробник"},
            {index: 2, type: "h", value: "МІСТО:"},
            {index: 3, type: "p", value: "Київ"},
            {index: 4, type: "h", value: "МЕТА:"},
            {index: 5, type: "p", value: "До тридцяти років увійти у ТОП-10 професіоналів у сфері комерційнійної розробки комплексних веб-продуктів в Україні"}
          ]
      }
    },
    allInformation: {
      workExperiense: {
        titleExperiense: {
          en: "Work Experiense",
          ua: "Досвід роботи"
        },
        listExperiense: {
          en: [
            {index: 0, type: "h", value: "Today - ..."},
            {index: 1, type: "p", value: "{/* Your Company may be here */}"},
            {index: 2, type: "h", value: "August 2022 - Today"},
            {index: 3, type: "p", value: "Open Source Web Application Development Practices"},
            {index: 4, type: "li", value: "Reproduction of existing projects to introduce programming skills"},
            {index: 5, type: "h", value: "May 2022 - Today"},
            {index: 6, type: "p", value: "Learning to program in JavaScript and TypeScript"},
            {index: 7, type: "h", value: "March 2017 - May 2017"},
            {index: 8, type: "p", value: "Commercial development of programmable menus for communities at vk.com and commercial development of a web application project based on WordPress"},
            {index: 9, type: "h", value: "January 2015 - February 2016"},
            {index: 10, type: "p", value: "Development of web applications based on WordPress: "},
            {index: 11, type: "p", value: "A total of four projects were implemented that were attached to the Sapa project"},
            {index: 12, type: "li", value: "Building web applications using a local Denver server "},
            {index: 13, type: "li", value: "Creating databases in MySQL "},
            {index: 14, type: "li", value: "Hosting web applications on a public server"}
          ],
          ua: [
            {index: 0, type: "h", value: "Сьогодні - ..."},
            {index: 1, type: "p", value: "{/* Тут може бути ваша Компанія */}"},
            {index: 2, type: "h", value: "Серпень 2022 - Сьогодні"},
            {index: 3, type: "p", value: "Практика створення веб-застосунків за відкритими джерелами"},
            {index: 4, type: "li", value: "Відтворення існуючих проектів з метою впровадження навичок програмування"},
            {index: 5, type: "h", value: "Травень 2022 - Сьогодні"},
            {index: 6, type: "p", value: "Навчання програмуванню мовами JavaScript та TypeScript"},
            {index: 7, type: "h", value: "Березень 2017 - травень 2017"},
            {index: 8, type: "p", value: "Комерційна розробка програмованих меню для спільнот у vk.com та комерційна розробка проекту веб-застосунку на базі WordPress"},
            {index: 9, type: "h", value: "Січень 2015 - Лютий 2016"},
            {index: 10, type: "p", value: "Розробка веб-застосунків на базі WordPress: "},
            {index: 11, type: "p", value: "Загалом реалізовано чотири проекти, які були приєднані до проекту Sapa"},
            {index: 12, type: "li", value: "Створення веб-застосунків із використанням локального серверу Denwer "},
            {index: 13, type: "li", value: "Створення баз даних у MySQL "},
            {index: 14, type: "li", value: "Розміщення веб-застосунків на публічному сервері "}
          ]
        }
      },
      listSkills: {
        titleProgrammingLang: {
          en: "Programming languages:",
          ua: "Мови програмування:"
        },
        titleStack: {
          en: "Stack of technology:",
          ua: "Стек технологій:"
        },
        titleLang: {
          en: "Languages:",
          ua: "Мови:"
        },
        softSkills: {
          en: ["High speed of effective learning of new technologies and acquisition of skills", "High adaptability", "Ability to effectively communicate with the team", "Stress resistance, proven over the years"],
          ua: ["Висока швидкість ефективного освоєння нових технологій та здобуття навичок", "Висока адаптивність", "Здатність ефективно комунікувати з колективом", "Стресостійкість, перевірена роками"]
        }
      },
      aboutMe: {
        titleAboutMe: {
          en: "About Me",
          ua: "Про мене"
        },
        textAboutMe: {
          en: [
            {index: 0, type: "h", value: "For me, programming is creativity,"},
            {index: 1, type: "p", value: "Any psychological tests can prove that my main motivation and purpose in life is constant development and creative activity aimed at creating something of high quality new It is in the creative process of finding and reproducing knowledge and skills in practice that my thirst for life."},
            {index: 2, type: "h", value: "to which I was drawn since childhood"},
            {index: 3, type: "p", value: "I got acquainted with programming back in school, when I fell in love Adobe Flash program and I realized that you can create simple games or multimedia programs yourself. I didn't know then that what I was writing under the 'moving' geometric shapes was nothing but a programming language ActionScript. I didn't know it, but the skills of algorithmization and passion for development remained."},
            {index: 4, type: "p", value: "In the second year, by a happy coincidence, I plunged into a new world for me HTML, CSS and Wordpress. Then this forgotten sense of programming grabbed me with a new force, and I wrote my own own sites, placed them on the Internet and received great satisfaction from this process. But then I perceived it exclusively as a pleasant hobby."},
            {index: 5, type: "h", value: "It was time - and I learned"},
            {index: 6, type: "p", value: "At the age of 18, I chose another path - law, which I successfully followed until until 24.02.2022. But since then, time and the aggravation of my own desires appeared, and I was eventually able to return to that fascinated me as a child and during my student years."},
            {index: 7, type: "p", value: "And finally I was able to master my usual hobby in a professional form, thanks to why will I be able to implement my unfulfilled plans and projects. However, it is still a long way to go a difficult path of development and constant improvement of one's own skills."},
            {index: 8, type: "h", value: "And I can help you"},
            {index: 9, type: "p", value: "Our goals coincide: you need a developer capable of implementing any technical tasks - and I can quickly work out such tasks, mastering new technologies and areas of knowledge."}
          ],
          ua: [
            {index: 0, type: "h", value: "Для мене програмування - це творчість,"},
            {index: 1, type: "p", value: "Будь-які психологічні тести можуть довести, що моєю основною мотивацією та призначенням по життю є постійний розвиток та творча діяльність, спрямована на створення чогось якісно нового. Саме у творчому процесі пошуку та відтворенні знань і навичок на практиці проявляється моя жага до життя."},
            {index: 2, type: "h", value: "до якої мене тягнуло з дитинства"},
            {index: 3, type: "p", value: "З програмуванням я познайомився ще у шкільний час, коли мені полюбилася програма Adobe Flash і я зрозумів, що можна самостійно створювати прості ігри чи мультимедійні програми. Тоді я ще не знав, що те, що я пишу під 'рухливими' геометричними фігурами є ніщо інше як мова програмування ActionScript. Я цього не знав, але навички алгоритмізації та захоплення розробкою - залишилось."},
            {index: 4, type: "p", value: "На другому курсі, за щасливим збігом обставин, я понурив у новий для себе світ HTML, CSS та Wordpress. Тоді це забуте почуття програмування захопило мене із новою силою, і я писав свої власні сайти, розміщував їх у мережі Інтернет і отримував велике задоволення від цього процесу. Але тоді я сприймав це виключно як приємне хоббі."},
            {index: 5, type: "h", value: "З'явився час - і я навчився"},
            {index: 6, type: "p", value: "Ще у 18 років я обрав інший шлях - юриспруденція, по якому успішно крокував аж до 24.02.2022. Але відтоді з'явився час та загострення власних бажань, і я з часом зміг повернутися до того, що мене захоплювало у дитинстві та у студентські роки."},
            {index: 7, type: "p", value: "І нарешті я зміг опанувати своє звичайне хоббі у професійній формі, завдяки чому зможу реалізувати свої не здійснені плани та проєкти. Проте для цього необхідно пройти ще довгий та складний шлях розвитку та постійного вдосконалення власних навичок."},
            {index: 8, type: "h", value: "І зможу вам допомогти"},
            {index: 9, type: "p", value: "Наші цілі збігаються: вам потрібен розробник, здатний реалізовувати будь-які технічні завдання - а я вмію швидко опрацьовувати такі завдання, опановуючи нові технології та сфери знань."}
          ]
        }
      }
    }
  },
  about: {
    title: {
      en: "About this web-application",
      ua: "Про цей веб-додаток"
    },
    text: {
      en: ["This web application is written entirely in TypeScript with the necessary typing, in particular when making asynchronous requests in the avatar.api.ts file, because strongly typing the response from the server will help prevent possible errors.", "This web application implements routing using React Router DOM, which allows transition between pages without rendering delay.", "Also implemented a language change system thanks to the use of the Redux Toolkit by dispatching a string with the desired language to the state stored in languageSlice.tsx. Such logic ensures instant rendering of only those elements which depend on the state of the language.", "The application implements an avatar using RTK Query: an asynchronous request is made to api.github.com, to which a special fetchBaseQuery request is sent to receive information on the DiVoronov account. After - a link is sent from the received object to the avatar from GitHub in the PhotoHolder component.", "The above component handles probable errors, and hall each response from the server renders: either the Skeleton loader if the status isLoading, or an avatar from GitHub if the response from the server is successful, or a custom image if an error occurred.", "Smooth appearance of elements when scrolling to the bottom of the screen is implemented using Intersection Observer.", "The main components are imported from the Material UI library.", "With for code cleanliness and ease of styling, some components are styled using the Styled Components library. Additionally, global styles are specified via createGlobalStyle.", "Styling uses SCSS syntax using multi-level nesting and variables imported from the GlobalStyle component."],
      ua: ["Даний веб-застосунок повністю написаний на TypeScript із необхідною типізацією, зокрема при здійсненні асинхронних запитів у файлі avatar.api.ts, оскільки строга типізація відповіді із серверу допоможе запобігти вірогідним помилкам.", "У даному веб-застосунку реалізований роутінг за допомогою React Router DOM, що надає змогу переходу між сторінками без затримки рендерінгу.", "Також реалізована система зміни мови завдяки використанню Redux Toolkit через діспатчінг строки з бажаною мовою до стейту, що зберігається у languageSlice.tsx. Така логіка забезпечує моментальний рендерінг тільки тих елементів, які залежать від стейту мови.", "У застосунку реалізовано аватар за допомогою RTK Query: робиться асинхронний запит на api.github.com, якому передається спеціальний запит за fetchBaseQuery на отримання інформації по акаунту DiVoronov. Після - з отриманого об'єкту передається посилання на аватар з GitHub у компонент PhotoHolder.", "Вищезазначений компонент обробляє вірогідні помилки, та залежно від відповіді з серверу рендерить: або лоадер Skeleton, якщо статус isLoading, або аватар з GitHub, якщо відповідь з серверу є успішною, або спеціальну картинку, якщо відбулася помилка.", "Плавна поява елементів при прокрутці до низу екрану реалізована за допомогою Intersection Observer.", "Основні компоненти імпортовані з бібліотеки Material UI.", "З метою чистоти коду та зручності стилізації, деякі компоненти стилізовано за допомогою бібліотеки Styled Components. Окрім того, глобальні стилі задано через createGlobalStyle.", "Для стилізації використовується синтаксис SCSS із використанням многорівневої вкладеності та перемінних, імпортованих з компоненту GlobalStyle."]
    }
  },
  contacts: {
    en: "My contacts",
    ua: "Мої контакти"
  }
};

export const LanguageContext = createContext(contentLanguages);
