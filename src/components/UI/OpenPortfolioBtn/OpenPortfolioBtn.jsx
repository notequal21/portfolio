import { NavLink } from 'react-router-dom';
import style from './OpenPortfolioBtn.module.scss'

let OpenPortfolioBtn = () => {
  return (<>
    <NavLink to={'/portfolio'} onClick={() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }} className={style.btn}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
            <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
          </filter>
        </defs>
      </svg>

      <button className={style.gooeyButton}>
        Портфолио
        <span class={style.bubbles}>
          <span class={style.bubble}></span>
          <span class={style.bubble}></span>
          <span class={style.bubble}></span>
          <span class={style.bubble}></span>
          <span class={style.bubble}></span>
          <span class={style.bubble}></span>
          <span class={style.bubble}></span>
          <span class={style.bubble}></span>
          <span class={style.bubble}></span>
          <span class={style.bubble}></span>
        </span>
      </button>
    </NavLink>
  </>)
}

export default OpenPortfolioBtn;