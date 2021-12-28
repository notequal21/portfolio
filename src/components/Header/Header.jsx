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
          <div className={style.headerBody__btns}>
            <Link to='main'>Lorem</Link>
            <Link to='main'>Lorem</Link>
            <Link to='main'>Lorem</Link>
            <Link to='main'>Lorem</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header