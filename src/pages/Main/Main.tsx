import s from "./Main.module.scss"

const Main = () => {
  return (
    <>
      <MainContent />
      <Advantages />
      <AboutMe />
    </>
  )
}

const MainContent = () => {
  return (
    <>
      <div className={s.main}>
        <div className="container small">
          <div className={s.mainBody}>
            <div className={s.mainBody__col}>
              <div className={s.mainBody__colHello}>
                Добрый день!
              </div>
              <div className={s.mainBody__colIm}>
                <span>Я</span> Кирилл Махнёв
              </div>
              <div className={s.mainBody__colPos}>
                Fronted Developer
              </div>
              <div className={s.mainBody__colAdvantages}>
                <span>
                  Свертаю ваш макет быстро и качественно!
                </span>
                <ul>
                  <li>
                    Адаптивная верстка
                  </li>
                  <li>
                    Кроссбраузерная верстка
                  </li>
                  <li>
                    Верстка на React
                  </li>
                  <li>
                    Поддержка проекта навсегда, после сдачи
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.mainBody__col}>
              <div className={s.mainBody__colSlider}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Advantages = () => {
  return (
    <>
      <div className={s.advantages}>
        <div className="container small">
          <div className={s.advantagesBody}>
            <div className={s.advantagesBody__col}>
              <div className={s.advantagesBody__colTitle}>
                Преимущества <br />
                Работы со мной
              </div>
              <ul className={s.advantagesBody__colList}>
                <li>
                  Выполненная работа в срок!
                </li>
                <li>
                  Всегда на связи!
                </li>
                <li>
                  Профессиональный подход к каждому заказу!
                </li>
                <li>
                  Качественный и оптимизированный код!
                </li>
                <li>
                  Адаптивная, валидная верстка.
                </li>
                <li>
                  Ваши клиенты оценят удобный и быстрый сайт.
                </li>
                <li>
                  С момента начала работы будет доступен тестовый домен.
                </li>
              </ul>
            </div>
            <div className={s.advantagesBody__col}>
              <div className={s.advantagesBody__colSlider}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const AboutMe = () => {
  return (
    <>
      <div className={`${s.advantages} ${s.about}`}>
        <div className="container small">
          <div className={s.advantagesBody}>
            <div className={s.advantagesBody__col}>
              <div className={s.advantagesBody__colTitle}>
                Немного <br />
                Обо мне 😎
              </div>
              <div className={s.advantagesBody__colText}>
                <p>
                  С 2020 года изучаю Frontend технологии. <br />
                  Опыт в разработке более двух лет. 🔥
                </p>
                <p>
                  Верстаю адаппитво, кроссбраузерно, это стандарт)
                </p>
                <p>
                  Помимо классической верскти, умею версать на React, <br />
                  а также работать с API.
                </p>
                <p>
                  Открыт всему новому! Всегда обучаюсь, и делаю это быстро !)
                </p>
                <p>
                  В работе использую лучшие современные технологии, чтобы вам и вашим клиентам было удобно пользоваться сайтом.
                </p>
              </div>
            </div>
            <div className={s.advantagesBody__col}>
              <div className={s.advantagesBody__colTitle}>
                Мой стек:
              </div>
              <ul className={s.advantagesBody__colStack}>
                <li>
                  React
                </li>
                <li>
                  Redux
                </li>
                <li>
                  JavaScript
                </li>
                <li>
                  TypeScript
                </li>
                <li>
                  HTML/CSS
                </li>
                <li>
                  sass/SCSS
                </li>
                <li>
                  axios
                </li>
                <li>
                  Rest API
                </li>
                <li>
                  GIT
                </li>
                <li>
                  Gulp
                </li>
                <li>
                  БЭМ
                </li>
                <li>
                  Figma, Zeplin, Photoshop
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main