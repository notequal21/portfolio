import { Link } from 'react-router-dom'
import style from './Footer.module.scss'

let Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.footerBody}>
          <div className={style.footer__logo}>
            <a target={`_blank`} href="https://github.com/notequal21">
              notequal21
            </a>
          </div>
          <div className={style.footerBtns}>
            <Link to=''>Главная</Link>
            <Link to='portfolio'>Портфолио</Link>
            <a target={`_blank`} href="https://notequal.notion.site/5563732749bd4087ba5441b23f684a08">Резюме</a>
            {/* <Link to='resume'>Резюме</Link> */}
            {/* <Link to='contacts'>Контакты</Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer