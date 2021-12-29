import { Link } from 'react-router-dom'
import style from './Footer.module.scss'

let Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.footerBody}>
          <div className={style.footer__logo}>LOGO</div>
          <div className={style.footerBtns}>
            <Link to=''>Главная</Link>
            <Link to='portfolio'>Портфолио</Link>
            <Link to='contacts'>Контакты</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer