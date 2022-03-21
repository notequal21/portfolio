import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import style from './Header.module.scss'

let Header = () => {

  let [isLoader, isLoaderChange] = useState(false)
  let isLoaderToggle = async () => {
    isLoaderChange(!isLoader)
  }


  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.headerBody}>
          <div className={style.headerBody__logo}>
            <a target={`_blank`} href="https://github.com/notequal21">
              notequal21
            </a>
          </div>
          <div className={style.headerBtns}>
            <Link to='main' onClick={() => {
              isLoaderToggle()
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}>Главная</Link>
            {isLoader ? <Loader /> : ''}
            <Link to='' onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}>Портфолио</Link>

            <a target={`_blank`} href="https://notequal.notion.site/5563732749bd4087ba5441b23f684a08">Резюме</a>
            {/* <Link to='resume'>Резюме</Link> */}
            {/* <Link to='contacts'>Контакты</Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}

let Loader = () => {
  return (<>
    <div className={style.loader}>
      loader
    </div>
  </>)
}

export default Header