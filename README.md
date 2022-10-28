MY RESUME

Dmytro Voronov

* This web application is written entirely in TypeScript with the necessary typing, in particular when making asynchronous requests in the avatar.api.ts file, because strictly typing the response from the server will help prevent possible errors.
* This web application implements routing using the React Router DOM, which allows you to move between pages without rendering delays.
* A language change system is also implemented using the Redux Toolkit by dispatching a string with the desired language to the state stored in languageSlice.tsx. Such logic provides instant rendering of only those elements that depend on the state of the language.
* The application implements an avatar using RTK Query: an asynchronous request is made to api.github.com, to which a special fetchBaseQuery request is sent to obtain information on the DiVoronov account. After - a link to the avatar from GitHub is transferred from the received object to the PhotoHolder component.
* The above component handles possible errors, and depending on the response from the server renders: either a Skeleton loader if the status isLoading, or an avatar from GitHub if the response from the server is successful, or a special image if an error occurred.
* The smooth appearance of elements when scrolling to the bottom of the screen is implemented using the Intersection Observer.
* Instant change between dark and light themes are implemented using the Redux Toolkit by dispatching a string with the desired theme to the state stored in themeSlice.tsx. And then each component accepts the corresponding state and, in accordance with it, applies variable topics created using createContext.
* The main components are imported from the Material UI library.
* For code cleanliness and ease of styling, some components are styled using the Styled Components library. Additionally, global styles are set via createGlobalStyle.
* Styling uses SCSS syntax using multi-level nesting and variables.

__________________________________________________ 

* Даний веб-застосунок повністю написаний на TypeScript із необхідною типізацією, зокрема при здійсненні асинхронних запитів у файлі avatar.api.ts, оскільки строга типізація відповіді із серверу допоможе запобігти вірогідним помилкам.
* У даному веб-застосунку реалізований роутінг за допомогою React Router DOM, що надає змогу переходу між сторінками без затримки рендерінгу.
* Також реалізована система зміни мови завдяки використанню Redux Toolkit через діспатчінг строки з бажаною мовою до стейту, що зберігається у languageSlice.tsx. Така логіка забезпечує моментальний рендерінг тільки тих елементів, які залежать від стейту мови.
* У застосунку реалізовано аватар за допомогою RTK Query: робиться асинхронний запит на api.github.com, якому передається спеціальний запит за fetchBaseQuery на отримання інформації по акаунту DiVoronov. Після - з отриманого об'єкту передається посилання на аватар з GitHub у компонент PhotoHolder.
* Вищезазначений компонент обробляє вірогідні помилки, та залежно від відповіді з серверу рендерить: або лоадер Skeleton, якщо статус isLoading, або аватар з GitHub, якщо відповідь з серверу є успішною, або спеціальну картинку, якщо відбулася помилка."
* Плавна поява елементів при прокрутці до низу екрану реалізована за допомогою Intersection Observer.
* Миттєва зміна темної та світлої тем реалізовано завдяки використанню Redux Toolkit через діспатчінг строки з бажаною темою до стейту, що зберігається у themeSlice.tsx. А далі кожен компонент приймає відповідний стейт та, відповідно до нього, застосовує перемінні теми, що створені за допомогою createContext.
* Основні компоненти імпортовані з бібліотеки Material UI.
* З метою чистоти коду та зручності стилізації, деякі компоненти стилізовано за допомогою бібліотеки Styled Components. Окрім того, глобальні стилі задано через createGlobalStyle.
* Для стилізації використовується синтаксис SCSS із використанням многорівневої вкладеності та перемінних.
