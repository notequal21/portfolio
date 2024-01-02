import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import s from './Main.module.scss';
import './Slider.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PortfolioItem } from '../Portfolio/Portfolio';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import StatsComponent from '../../components/Stats/Stats';
import LiquidButton from './JellyButton';
import { useNavigate } from 'react-router-dom';

const Main = () => {
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
    </>
  );
};

const MainContent = () => {
  return (
    <>
      <div className={s.main}>
        <div className='container small'>
          <div className={s.mainBody}>
            <div className={s.mainBody__hello}>Приветствую!</div>
            <div className={s.mainBody__description}>
              Меня зовут Кирилл. <br /> Я фриланс-разработчик с опытом более 4х
              лет. <br /> Создаю веб-сайты с использованием react, и верстаю
              макеты. <br /> Почему стоит выбрать меня:
            </div>
            <ul className={s.mainBody__list}>
              <li className={s.mainBody__listItem}>Экспертность и Опыт</li>
              <li className={s.mainBody__listItem}>
                Pixel Perfect и SEO-Оптимизация
              </li>
              <li className={s.mainBody__listItem}>
                Оптимизированный и Валидный Код
              </li>
              <li className={s.mainBody__listItem}>Точное Соблюдение Сроков</li>
              <li className={s.mainBody__listItem}>Комплексный Подход</li>
              {/* <li className={s.mainBody__listItem}>Всегда и в срок !</li>
              <li className={s.mainBody__listItem}>
                С использованием лучших технологий и методологий!
              </li>
              <li className={s.mainBody__listItem}>Pixel Perfect</li>
              <li className={s.mainBody__listItem}>
                Сематичесекие теги для улучшения seo!
              </li>
              <li className={s.mainBody__listItem}>
                Валидный и оптимизированный код!
              </li> */}
            </ul>

            <StatsComponent />
          </div>
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <div className={s.about}>
      <div className='container small'>
        <div className={s.aboutBody}>
          <div className={s.aboutBody__title}>НЕМНОГО ОБО МНЕ</div>
          <div className={s.aboutBody__descr}>
            Я являюсь фрилансером с более чем 4-летним опытом <br /> в
            разработке и верстке веб-сайтов. 🔥 <br /> Мои навыки и опыт
            позволяют мне создавать <br /> высококачественные и современные
            веб-решения.
            <br /> Вот что вы можете ожидать, работая со мной:
          </div>
          {/* <div className={s.aboutCards}>
            <div className={s.aboutCards__item}>
              <div className={s.aboutCards__itemTitle}></div>
              <div className={s.aboutCards__itemDescr}></div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const Advantages = () => {
  const advantagesCards = [
    {
      title: '🚀 Опыт и Экспертиза:',
      descr:
        ' Более 4 лет погружения в мир Frontend технологий, с более чем 100 успешно завершенными проектами в моем портфолио. Мой опыт включает в себя не только верстку адаптивных и кроссбраузерных сайтов, но и разработку одностраничных приложений (SPA) на React с интеграцией API.',
    },
    {
      title: '💡 Постоянное Обучение:',
      descr:
        'Я всегда стремлюсь к самосовершенствованию и оставаться в курсе последних тенденций в веб-разработке. Моя открытость к новым технологиям и быстрое усвоение новых концепций позволяют мне создавать современные и инновационные проекты.',
    },
    {
      title: '🔗 Сотрудничество:',
      descr:
        'Я готов к сотрудничеству и всегда стараюсь учесть ваши потребности и предпочтения. Вместе мы можем создать сайт, который не только соответствует вашим ожиданиям, но и превосходит их.',
    },
  ];

  return (
    <>
      <div className={s.advantages}>
        <div className='container small'>
          <div className={s.advantagesBody}>
            {advantagesCards.map((item, index) => (
              <div key={index} className={s.advantagesBody__item}>
                <div className={s.advantagesBody__itemTitle}>{item.title}</div>
                <div className={s.advantagesBody__itemDescr}>{item.descr}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const PreviewProjects = () => {
  const navigate = useNavigate();

  const toPage = (page: string) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    return navigate(`${page}`);
  };

  const projectsListStateFiltered = useSelector((state: any) =>
    state.projects.filter((item: any) => item.IsBest)
  );
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
  );

  useEffect(() => {
    const buttons = document.getElementsByClassName('liquid-button');
    for (let buttonIndex = 0; buttonIndex < buttons.length; buttonIndex++) {
      const button: any = buttons[buttonIndex];
      button.liquidButton = new LiquidButton(button);
    }
  });

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
              toPage('portfolio');
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
            data-color2='#229ed9'
            data-color3='#20D8F9'
          ></svg>
        </div>
      </div>
    </div>
  );
};

const Reviews = () => {
  // Reviews slider
  const reviewsListState = useSelector((state: any) => state.reviews);
  const reviewsItems = reviewsListState.map((item: any, index: number) => (
    <SwiperSlide key={index}>
      <div className={s.review}>
        <span className={s.reviewName}>{item.Name}</span>
        <span className={s.reviewContent}>“{item.Content}”</span>
      </div>
    </SwiperSlide>
  ));

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
  );
};

const MyStack = () => {
  const ListItem = ({ value }: any) => {
    return <li className={s.stackBody__item}>{value}</li>;
  };

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
  );
};

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
  );
};

export default Main;
