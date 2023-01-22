import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'
import s from './Main.module.scss'
import './Slider.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { PortfolioItem } from '../Portfolio/Portfolio'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import StatsComponent from '../../components/Stats/Stats'
import LiquidButton from './JellyButton'
import { useNavigate } from 'react-router-dom'

const Main = () => {
  const handleMargin = () => {
    const mainBlock = document.querySelector(`.${s.main}`)
    let parallaxCont: any = document.querySelector(`.${s.parallaxCont}`)

    parallaxCont.style.margin = `${mainBlock?.clientHeight}px 0 0`
  }

  useEffect(() => {
    handleMargin()
    window.addEventListener('resize', handleMargin)
  }, [])

  return (
    <>
      <MainContent />

      <div className={s.parallaxCont}>
        <About />
        <Advantages />
        <div className={s.contentGradient}>
          <PreviewProjects />
          <Reviews />
        </div>
        <MyStack />
      </div>
      {/* <AboutMe /> */}
    </>
  )
}

const MainContent = () => {
  // Slider for main screen
  // const projectsListStateFiltered = useSelector((state: any) =>
  //   state.projects.filter((item: any) => item.IsBest)
  // )
  // const projectsListSlider = projectsListStateFiltered.map(
  //   (item: any, index: number) => (
  //     <SwiperSlide key={index}>
  //       <PortfolioItem
  //         isSlider
  //         name={item.Name}
  //         img={item.Img}
  //         link={item.Link}
  //         isBest={item.IsBest}
  //         type={item.Type}
  //       />
  //     </SwiperSlide>
  //   )
  // )

  return (
    <>
      <div className={s.main}>
        <div className='container small'>
          <div className={s.mainBody}>
            <div className={s.mainBody__hello}>Привет!</div>
            <div className={s.mainBody__description}>
              Меня зовут Кирилл, <br />Я Frontend разработчик с опытом работы
              более 3х лет.
            </div>
            <ul className={s.mainBody__list}>
              <li className={s.mainBody__listItem}>Всегда и в срок !</li>
              <li className={s.mainBody__listItem}>
                С использованием лучших технологий и методологий!
              </li>
              <li className={s.mainBody__listItem}>Pixel Perfect</li>
              <li className={s.mainBody__listItem}>
                Сематичесекие теги для улучшения seo!
              </li>
              <li className={s.mainBody__listItem}>
                Валидный и оптимизированный код!
              </li>
            </ul>

            <StatsComponent />
          </div>
        </div>
      </div>
    </>
  )
}

const About = () => {
  return (
    <div className={s.about}>
      <div className='container small'>
        <div className={s.aboutBody}>
          <div className={s.aboutBody__title}>НЕМНОГО ОБО МНЕ</div>
          <div className={s.aboutBody__descr}>
            Меня зовут Кирилл Махнев. <br /> С 2019 года изучаю Frontend
            технологии. <br />
            Опыт в разработке более трех лет. 🔥
            <br /> Верстаю адаппитво, кроссбраузерно, это стандарт) <br />{' '}
            Помимо верскти, разрабатываю SPA на React с подключением API. <br />{' '}
            Открыт всему новому! Всегда обучаюсь, и делаю это быстро !) <br /> В
            работе использую лучшие современные технологии, <br /> чтобы вам и
            вашим клиентам было удобно пользоваться сайтом.
          </div>
        </div>
      </div>
    </div>
  )
}

const Advantages = () => {
  // Reviews slider
  // const reviewsListState = useSelector((state: any) => state.reviews)
  // const reviewsItems = reviewsListState.map((item: any, index: number) => (
  //   <SwiperSlide key={index}>
  //     <div className={s.review}>
  //       <span className={s.reviewName}>{item.Name}</span>
  //       <span className={s.reviewContent}>“{item.Content}”</span>
  //     </div>
  //   </SwiperSlide>
  // ))

  return (
    <>
      <div className={s.advantages}>
        <div className='container small'>
          <div className={s.advantages__title}>ПРЕИМУЩЕСТВА</div>
          <div className={s.advantagesBody}>
            <div className={s.advantagesBody__item}>
              <div className={s.advantagesBody__itemTitle}>Качество</div>
              <div className={s.advantagesBody__itemDescr}>
                Валидная, адаптивная верстка. Хорошо структурированный код.
                Использование современного стека технологий <br /> обеспечивает
                высокое качество выполенной работы.
              </div>
              <div className={`${s.advantagesBody__itemDescr} ${s.additional}`}>
                А также, проверяю работу перед сдачей!
              </div>
            </div>
            <div className={s.advantagesBody__item}>
              <div className={s.advantagesBody__itemTitle}>Скорость</div>
              <div className={s.advantagesBody__itemDescr}>
                Делаю быстрее большинства других разработчиков. <br /> Лендинг
                за день? - готово! <br /> Помогу, если горят 🔥 сроки) И без
                потери в качестве!
              </div>
            </div>
            <div className={s.advantagesBody__item}>
              <div className={s.advantagesBody__itemTitle}>Сроки</div>
              <div className={s.advantagesBody__itemDescr}>
                За счет высокой скорости работы всегда успеваю в срок! <br /> Не
                пропаду перед сдачей или после получения предоплаты. <br />{' '}
                Всегда на связи!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const PreviewProjects = () => {
  const navigate = useNavigate()

  const toPage = (page: string) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    return navigate(`${page}`)
  }

  const projectsListStateFiltered = useSelector((state: any) =>
    state.projects.filter((item: any) => item.IsBest)
  )
  const projectsListSlider = projectsListStateFiltered.map(
    (item: any, index: number) => (
      <SwiperSlide key={index}>
        <PortfolioItem
          isSlider
          name={item.Name}
          img={item.Img}
          link={item.Link}
          isBest={item.IsBest}
          type={item.Type}
        />
      </SwiperSlide>
    )
  )

  useEffect(() => {
    const buttons = document.getElementsByClassName('liquid-button')
    for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
      const button: any = buttons[buttonIndex]
      button.liquidButton = new LiquidButton(button)
    }
  })

  return (
    <div className={s.preview}>
      <div className='container'>
        <div className={s.previewBody__title}>ПРИМЕРЫ РАБОТ</div>
        <div className={s.previewBody}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop
            pagination={{
              clickable: true,
              bulletClass: s.bullet,
              bulletActiveClass: s.bulletActive,
              modifierClass: 'bullet__list',
            }}
            className={`${s.previewBody__slider} ${s.slider}`}
          >
            <div className='swiper-button-prev cursorHover _navigation-prev'></div>
            {projectsListSlider}
            <div className='swiper-button-next cursorHover _navigation-next'></div>
          </Swiper>

          {/* <div className={`${s.previewBody__more} liquid-button`}>
            Больше работ
          </div> */}

          <svg
            onClick={() => {
              toPage('portfolio')
            }}
            className={`${s.previewBody__more} liquid-button`}
            data-text='Больше работ'
            data-force-factor='0.1'
            data-layer-1-viscosity='0.5'
            data-layer-2-viscosity='0.4'
            data-layer-1-mouse-force='400'
            data-layer-2-mouse-force='500'
            data-layer-1-force-limit='1'
            data-layer-2-force-limit='2'
            data-color1='#c8ff29'
            data-color2='#c5afff'
            data-color3='#20D8F9'
          ></svg>
        </div>
      </div>
    </div>
  )
}

const Reviews = () => {
  // Reviews slider
  const reviewsListState = useSelector((state: any) => state.reviews)
  const reviewsItems = reviewsListState.map((item: any, index: number) => (
    <SwiperSlide key={index}>
      <div className={s.review}>
        <span className={s.reviewName}>{item.Name}</span>
        <span className={s.reviewContent}>“{item.Content}”</span>
      </div>
    </SwiperSlide>
  ))

  return (
    <div className={s.reviews}>
      <div className='container'>
        <div className={s.reviews__title}>ОТЗЫВЫ</div>
        <div className={s.reviews__subtitle}>
          Обо мне говорят отзывы клиентов!
        </div>
        <div className={s.reviewsSlider}>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            className={s.slider}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            autoHeight
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            grabCursor
            loop
            pagination={{
              clickable: true,
              bulletClass: `${s.bullet} ${s.bulletLight}`,
              bulletActiveClass: s.bulletActive,
              modifierClass: 'bullet__list-light',
            }}
          >
            <div className='swiper-button-prev cursorHover _navigation-prev'></div>
            {reviewsItems}
            <div className='swiper-button-next cursorHover _navigation-next'></div>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

const MyStack = () => {
  const ListItem = ({ value }: any) => {
    return <li className={s.stackBody__item}>{value}</li>
  }

  return (
    <div className={s.stack}>
      <div className='container small'>
        <div className={s.stack__title}>МОЙ СТЕК</div>
        <ul className={s.stackBody}>
          <ListItem value='React' />
          <ListItem value='TypeScript' />
          <ListItem value='Rest API' />
          <ListItem value='Gulp' />
          <ListItem value='Redux' />
          <ListItem value='HTML/CSS' />
          <ListItem value='GIT' />
          <ListItem value='JavaScript' />
          <ListItem value='sass/SCSS' />
          <ListItem value='БЭМ' />
          <ListItem value='Figma, Zeplin, PSD' />
        </ul>
      </div>
    </div>
  )
}

const AboutMe = () => {
  return (
    <>
      <div className={`${s.advantages} ${s.about}`}>
        <div className='container small'>
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
                <p>Верстаю адаппитво, кроссбраузерно, это стандарт)</p>
                <p>
                  Помимо классической верскти, умею версать на React, <br />а
                  также работать с API.
                </p>
                <p>
                  Открыт всему новому! Всегда обучаюсь, и делаю это быстро !)
                </p>
                <p>
                  В работе использую лучшие современные технологии, чтобы вам и
                  вашим клиентам было удобно пользоваться сайтом.
                </p>
              </div>
            </div>
            <div className={s.advantagesBody__col}>
              <div className={s.advantagesBody__colTitle}>Мой стек:</div>
              <ul className={s.advantagesBody__colStack}>
                <li>React</li>
                <li>Redux</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>HTML/CSS</li>
                <li>sass/SCSS</li>
                <li>axios</li>
                <li>Rest API</li>
                <li>GIT</li>
                <li>Gulp</li>
                <li>БЭМ</li>
                <li>Figma, Zeplin, Photoshop</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
