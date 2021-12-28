import style from './Main.module.scss'
import myImg from '../../assets/img/components/main/img.jpg'

let Main = () => {
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

export default Main