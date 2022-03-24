import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import style from './Header.module.scss'

let Header = ({ withLoader, isLoader, ...props }) => {

  const loaderX = useSelector((state) => state.loader.pos.x)
  const loaderY = useSelector((state) => state.loader.pos.y)

  let navigate = useNavigate()

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
            {isLoader ? <Loader loaderX={loaderX} loaderY={loaderY} /> : ''}
            <div className='link'
              onClick={(e) => {
                withLoader(e.clientX, e.clientY)

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
              onClick={(e) => {
                withLoader(e.clientX, e.clientY)

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

let Loader = ({ loaderX, loaderY }) => {

  let posX = loaderX
  let posY = loaderY

  useEffect(() => {
    document.querySelector(`.${style.loader}`).style.left = `${posX}px`
    document.querySelector(`.${style.loader}`).style.top = `${posY}px`
  }, [])

  return (<>
    <div className={style.loader}></div>
  </>)
}

export default Header