import s from "./Header.module.scss"
import gitHubLogo from "../../assets/img/icons/github-logo.svg"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import Loader from "../Loader/Loader"

const Header = ({ withLoader, isLoader, ...props }: any) => {

  const loaderX = useSelector((state: any) => state.loader.pos.x)
  const loaderY = useSelector((state: any) => state.loader.pos.y)
  let navigate = useNavigate()

  return (
    <>
      <div className={s.header}>
        <div className="container">
          <div className={s.headerBody}>
            <a
              className={`${s.headerBody__github} link`}
              target="_blank"
              href="https://github.com/notequal21"
              rel="noreferrer">
              <img src={gitHubLogo} alt="" />
              notequal21
            </a>
            <div className={s.headerBody__menu}>
              {isLoader ? <Loader loaderX={loaderX} loaderY={loaderY} /> : ''}
              <div className={`${s.headerBody__menuItem} link`}
                onClick={(e) => {
                  withLoader(e.clientX, e.clientY)

                  setTimeout(() => {
                    navigate('/')
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    })
                  }, 500)

                }}>
                Главная
              </div>
              <div className={`${s.headerBody__menuItem} link`}
                onClick={(e) => {
                  withLoader(e.clientX, e.clientY)

                  setTimeout(() => {
                    navigate('portfolio')
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    })
                  }, 500)

                }}>
                Портфолио
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header