import { useNavigate } from 'react-router-dom'
import style from './OpenPortfolioBtn.module.scss'

let OpenPortfolioBtn = ({ withLoader, ...props }) => {
  let navigate = useNavigate()

  return (<>
    <div className={`${style.btn} link`}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
          </filter>
        </defs>
      </svg>

      <button className={style.gooeyButton}
        onClick={() => {
          withLoader()

          setTimeout(() => {
            navigate('..')
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }, 500)
        }}>
        Портфолио
        <span className={style.bubbles}>
          <span className={style.bubble}></span>
          <span className={style.bubble}></span>
          <span className={style.bubble}></span>
          <span className={style.bubble}></span>
          <span className={style.bubble}></span>
          <span className={style.bubble}></span>
          <span className={style.bubble}></span>
          <span className={style.bubble}></span>
          <span className={style.bubble}></span>
          <span className={style.bubble}></span>
        </span>
      </button>
    </div>
  </>)
}

export default OpenPortfolioBtn;