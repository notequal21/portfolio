import style from './Main.module.scss'
import myImg from '../../assets/img/components/main/img.jpg'

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
          <div className={`${style.mainCol}`}>
            <div className={`${style.mainCol__image}`}>
              <img src={myImg} alt='img' />
            </div>
          </div>
          <div className={`${style.mainCol}`}>
            <div className={`${style.mainCol__name}`}>
              Кирилл Махнёв
            </div>
            <div className={`${style.mainCol__pos}`}>
              Frontend Developer
            </div>
            <div className={`${style.mainCol__about}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, corporis laudantium, tenetur nobis, quo sapiente aliquid cumque ea blanditiis architecto quod animi ipsam earum eius natus aut quia quae odit.
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
              Lorem ipsum dolor sit.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Lorem ipsum dolor sit.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Lorem ipsum dolor sit.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Lorem ipsum dolor sit.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Lorem ipsum dolor sit.
            </div>
          </div>
          <div className={`${style.advantagesBody__col}`}>
            <div className={`${style.advantagesBody__item}`}>
              Lorem ipsum dolor sit.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Lorem ipsum dolor sit.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Lorem ipsum dolor sit.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Lorem ipsum dolor sit.
            </div>
            <div className={`${style.advantagesBody__item}`}>
              Lorem ipsum dolor sit.
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
          Мой стэк
        </div>
        <div className={`${style.mystackBody}`}>
          <div className={`${style.mystackBody__col}`}>
            <div className={`${style.mystackBody__text}`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente dolorum dolores aut amet soluta laudantium, quod, quas hic cupiditate incidunt perspiciatis ad ut. Nemo laborum, laboriosam quae sint vel culpa.
            </div>
          </div>
          <div className={`${style.mystackBody__col}`}>
            <div className={`${style.mystackBody__list}`}>
              <div className={`${style.mystackBody__listItem}`}>
                Lorem, ipsum dolor.
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                Lorem, ipsum dolor.
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                Lorem, ipsum dolor.
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                Lorem, ipsum dolor.
              </div>
              <div className={`${style.mystackBody__listItem}`}>
                Lorem, ipsum dolor.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main