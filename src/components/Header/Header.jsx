import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import style from './Header.module.scss'

let Header = (props) => {

  let navigate = useNavigate()

  let [isLoader, isLoaderChange] = useState(false)
  let isLoaderToggle = () => {
    isLoaderChange(!isLoader)
    setTimeout(() => {
      isLoaderChange(isLoader)
    }, 1000)
  }

  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.headerBody}>
          <div className={style.headerBody__logo}>
            <a
              target={`_blank`}
              className='link'
              href="https://github.com/notequal21">
              notequal21
            </a>
          </div>
          <div className={style.headerBtns}>
            {isLoader ? <Loader /> : ''}
            <div className='link'
              onClick={() => {

                isLoaderToggle()
                setTimeout(() => {
                  navigate('main')
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
                }, 500)

              }}>
              Главная
            </div>
            <div className='link'
              onClick={() => {
                isLoaderToggle()
                setTimeout(() => {
                  navigate('')
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
                }, 500)
              }}>
              Портфолио
            </div>
            <a
              target={`_blank`}
              className='link'
              href="https://notequal.notion.site/5563732749bd4087ba5441b23f684a08">
              Резюме
            </a>
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
    <div className={style.loader}></div>
  </>)
}

export default Header