import { Link } from 'react-router-dom'
import style from './Header.module.scss'

let Header = () => {
  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.headerBody}>
          <div className={style.headerBody__logo}>
            LOGO
          </div>
          <div className={style.headerBtns}>
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

export default Header