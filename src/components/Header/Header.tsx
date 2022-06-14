import s from "./Header.module.scss"
import gitHubLogo from "../../assets/img/icons/github-logo.svg"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className={s.header}>
        <div className="container">
          <div className={s.headerBody}>
            <a
              className={s.headerBody__github}
              target="_blank"
              href="https://github.com/notequal21"
              rel="noreferrer">
              <img src={gitHubLogo} alt="" />
              notequal21
            </a>
            <div className={s.headerBody__menu}>
              <Link className={s.headerBody__menuItem} to="main">Главная</Link>
              <Link className={s.headerBody__menuItem} to="/">Портфолио</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header