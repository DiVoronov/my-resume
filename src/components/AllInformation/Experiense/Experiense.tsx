import React from "react";
import { StyledExperienseComponent } from "./experiense.styles";

export function Experiense() {

  return(
    <StyledExperienseComponent>
      <div>
        <div>
          <span className="headSpan">Сьогодні - ...</span>
          <span>
            // Тут може бути ваша Компанія
          </span>
        </div>
        <div>
          <span className="headSpan">Серпень 2022 - Сьогодні</span>
          <span>Практика створення веб-застосунків за відкритими джерелами*</span>
          <span><small>* Відтворення існуючих проектів з метою впровадження навичок програмування</small></span>
        </div>
        <div>
          <span className="headSpan">Травень 2022 - Сьогодні (та завтра і кожного наступного дня)</span>
          <span>Навчання програмуванню мовами JavaScript та TypeScript</span>
        </div>
        <div>
          <span className="headSpan">Березень 2017 - травень 2017</span>
          <span>Комерційна розробка програмованих меню для спільнот у vk.com та комерційна розробка проекту веб-застосунку на базі WordPress</span>
        </div>
        <div>
          <span className="headSpan">Січень 2015 - Лютий 2016</span>
          <span>Розробка веб-застосунків на базі WordPress: </span>
          <span><small>Загалом реалізовано чотири проекти, які були приєднані до проекту Sapa</small></span>
          <ul>
            <li><span><small>Створення веб-застосунків із використанням локального серверу Denwer </small></span></li>
            <li><span><small>Створення баз даних у MySQL </small></span></li>
            <li><span><small>Розміщення веб-застосунків на публічному сервері </small></span></li>
          </ul>
          
        </div>
      </div>
    </StyledExperienseComponent>
  )
}