import style from './Main.module.scss'
import myImg from '../../assets/img/components/main/img.jpg'
import OpenPortfolioBtn from '../UI/OpenPortfolioBtn/OpenPortfolioBtn'

let Main = () => {
  return (
    <>
      <MainBlock />
      <AdvantagesBlock />
      <MyStackBlock />
    </>
  )
}

let MainBlock = () => {
  return (
    <div className={`${style.main}`}>
      <div className="container">
        <div className={`${style.mainBody}`}>
          {/* <div className={`${style.mainCol}`}>
            <div className={`${style.mainCol__image}`}>
              <img src={myImg} alt='img' />
            </div>
          </div> */}
          <div className={`${style.mainCol}`}>
            <div className={`${style.mainCol__name}`}>
              Кирилл Махнёв
            </div>
            <div className={`${style.mainCol__pos}`}>
              Frontend Developer
            </div>
            <div className={`${style.mainCol__about}`}>
              <p>
                Свертаю твой макет быстро и качественно!
              </p>
              <ul>
                <li>Адаптивная верстка</li>
                <li>Кроссбраузерная верстка</li>
                <li>С поддержкой retina экранов</li>
                <li>Верстка на React</li>
                <li>Верстка на Vue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

let AdvantagesBlock = () => {
  return (
    <div className={`${style.advantages}`}>
      <div className="container">
        <div className={`${style.advantages__title}`}>
          Преимущества работы со мной
        </div>
        <div className={`${style.advantagesBody}`}>
          <div className={`${style.advantagesBody__col}`}>
            <div className={`${style.advantagesBody__item}`}>
              Выполненная работа в срок.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Всегда на связи.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Профессиональный подход к каждому заказу.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Качественный и оптимизированный код.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Адаптивная, валидная верстка.
            </div>
          </div>
          <div className={`${style.advantagesBody__col}`}>
            <div className={`${style.advantagesBody__item}`}>
              Ваш сайт будет отлично отображаться на всех устройствах.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Ваши клиенты оценят удобный и быстрый сайт.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              С момента начала работы будет доступен тестовый домен.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Соблюдаю сроки
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Работу делаю качественно и быстро
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

let MyStackBlock = () => {
  return (
    <div className={`${style.mystack}`}>
      <div className="container">
        <div className={`${style.mystack__title}`}>
          Обо мне 😎
        </div>
        <div className={`${style.mystackBody}`}>
          <div className={`${style.mystackBody__col}`}>
            <div className={`${style.mystackBody__text}`}>
              <p>
                С 2020 года изучаю Frontend технологии. Опыт в разработке более двух лет. 🔥
              </p>
              <p>
                Верстаю адаппитво, кроссбраузерно, это стандарт)
              </p>
              <p>
                Общительный, уверенный и спокойный!)
              </p>
              <p>
                Открыт всему новому! Всегда обучаюсь, и делаю это быстро !)
              </p>
              <p className={style.important}>
                В работе использую лучшие современные технологии, чтобы вам и вашим клиентам было удобно пользоваться сайтом.
              </p>
            </div>
          </div>
          <div className={`${style.mystackBody__col}`}>
            <div className={`${style.mystackBody__list}`}>
              <div className={`${style.mystackBody__listItem}`}>
                React
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                Redux
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                Vue
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                Vuex
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                JavaScript
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                TypeScript
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                HTML/CSS
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                sass/SCSS
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                Pug
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                axios
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                HTTP
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                Rest API
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                GIT
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                Gulp
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                npm/yarn
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                БЭМ
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                Figma, Zeplin, Photoshop
              </div>
            </div>
          </div>
        </div>
        <div className={style.portfolioBtn}>
          <OpenPortfolioBtn />
        </div>
      </div>
    </div>
  )
}

export default Main