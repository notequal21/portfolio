import style from './Footer.module.scss'
import { useNavigate } from 'react-router-dom'

let Footer = ({ withLoader, isLoader, ...props }) => {

  let navigate = useNavigate()

  return (
    <div className={style.footer}>
      <div className="container">
        <div className={style.footerBody}>
          <div className={style.footer__logo}>
            <a
              target={`_blank`}
              className='link'
              href="https://github.com/notequal21">
              notequal21
            </a>
          </div>
          <div className={style.footerBtns}>
            <div className='link'
              onClick={() => {
                withLoader()

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
                withLoader()

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

export default Footer