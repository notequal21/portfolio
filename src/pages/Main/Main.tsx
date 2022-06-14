import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import s from "./Main.module.scss"
import './Slider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import projects from "../../store/projects.json"
import reviews from "../../store/reviews.json"
import { PortfolioItem } from '../Portfolio/Portfolio';

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

  const projectsListSlider = projects.map(item =>
    <SwiperSlide key={item.Id}>
      <PortfolioItem isSlider name={item.Name} img={item.Img} link={item.Link} />
    </SwiperSlide>
  ).reverse()

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
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  className={s.slider}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  navigation
                  loop
                  pagination={{
                    clickable: true,
                    bulletClass: s.bullet,
                    bulletActiveClass: s.bulletActive,
                    modifierClass: 'bullet__list',
                  }}
                >
                  {projectsListSlider}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Advantages = () => {
  const reviewsItems = reviews.map(item =>
    <SwiperSlide key={item.Id}>
      <div className={s.review}>
        <span className={s.reviewName}>
          {item.Name}
        </span>
        <span className={s.reviewContent}>
          “{item.Content}”
        </span>
      </div>
    </SwiperSlide>
  )
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
                <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  className={s.slider}
                  spaceBetween={0}
                  slidesPerView={1}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  autoHeight
                  navigation
                  grabCursor
                  loop
                  pagination={{
                    clickable: true,
                    bulletClass: `${s.bullet} ${s.bulletLight}`,
                    bulletActiveClass: s.bulletActive,
                    modifierClass: 'bullet__list-light',
                  }}
                >
                  {reviewsItems}
                </Swiper>
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