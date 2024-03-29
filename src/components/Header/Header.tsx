import s from './Header.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader'

const Header = ({ withLoader, isLoader, isFooter, ...props }: any) => {
  const location = useLocation()

  // projects count
  const projectsCountState = useSelector((state: any) => state.projects.length)

  // loader
  const loaderX = useSelector((state: any) => state.loader.pos.x)
  const loaderY = useSelector((state: any) => state.loader.pos.y)
  let navigate = useNavigate()

  return (
    <>
      <div className={`${s.header} ${isFooter ? s._footer : ''}`}>
        <div className='container'>
          <div className={s.headerBody}>
            <a
              className={`${s.headerBody__github} cursorHover link`}
              target='_blank'
              href='https://github.com/notequal21'
              rel='noreferrer'
            >
              {/* <img src={gitHubLogo} alt="" /> */}
              <svg
                width='35'
                height='34'
                viewBox='0 0 35 34'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_11_299)'>
                  <path d='M17.2893 0.694817C7.90164 0.694817 0.289185 8.2593 0.289185 17.591C0.289185 25.0561 5.16024 31.3895 11.9149 33.6237C12.7645 33.7801 13.0765 33.2571 13.0765 32.8109C13.0765 32.408 13.0607 31.077 13.0534 29.6651C8.32391 30.6872 7.32594 27.6716 7.32594 27.6716C6.55262 25.7187 5.43838 25.1994 5.43838 25.1994C3.89596 24.1507 5.55465 24.1722 5.55465 24.1722C7.26175 24.2914 8.16063 25.9134 8.16063 25.9134C9.67687 28.4964 12.1376 27.7497 13.1077 27.318C13.2603 26.2259 13.7009 25.4806 14.187 25.0586C10.4111 24.6314 6.4417 23.1826 6.4417 16.7085C6.4417 14.8638 7.10579 13.3566 8.19329 12.1733C8.01678 11.7478 7.43489 10.0293 8.35797 7.70195C8.35797 7.70195 9.78554 7.24785 13.0342 9.43387C14.3903 9.05951 15.8446 8.87177 17.2893 8.86533C18.7341 8.87177 20.1895 9.05951 21.5481 9.43387C24.7928 7.24785 26.2184 7.70195 26.2184 7.70195C27.1438 10.0293 26.5616 11.7478 26.3851 12.1733C27.4751 13.3566 28.1347 14.8638 28.1347 16.7085C28.1347 23.198 24.1577 24.6269 20.3722 25.0452C20.982 25.5695 21.5253 26.5978 21.5253 28.1741C21.5253 30.4349 21.5056 32.2543 21.5056 32.8109C21.5056 33.2605 21.8116 33.7873 22.6733 33.6214C29.4243 31.3848 34.2892 25.0536 34.2892 17.591C34.2892 8.2593 26.6779 0.694817 17.2893 0.694817ZM6.65629 24.7637C6.61885 24.8477 6.48597 24.8728 6.36492 24.8152C6.24162 24.7601 6.17237 24.6457 6.21234 24.5614C6.24894 24.475 6.38209 24.4509 6.50512 24.5088C6.6287 24.564 6.69908 24.6795 6.65629 24.7637ZM7.49251 25.5053C7.41143 25.58 7.25294 25.5453 7.1454 25.4272C7.0342 25.3095 7.01337 25.1519 7.09557 25.0761C7.17918 25.0014 7.33289 25.0364 7.44437 25.1542C7.55557 25.2734 7.57724 25.4298 7.49251 25.5053ZM8.06618 26.4541C7.96202 26.526 7.79171 26.4586 7.68642 26.3084C7.58226 26.1581 7.58226 25.9779 7.68867 25.9057C7.79424 25.8336 7.96202 25.8985 8.06872 26.0476C8.1726 26.2004 8.1726 26.3805 8.06618 26.4541ZM9.0364 27.553C8.94321 27.6551 8.74475 27.6277 8.59948 27.4884C8.45084 27.3521 8.40946 27.1588 8.50292 27.0567C8.59723 26.9543 8.79683 26.9831 8.94322 27.1213C9.09073 27.2573 9.13577 27.452 9.0364 27.553ZM10.2903 27.924C10.2492 28.0563 10.0581 28.1165 9.86549 28.0602C9.67322 28.0023 9.54738 27.8473 9.58623 27.7136C9.62621 27.5804 9.8182 27.5177 10.0122 27.5779C10.2042 27.6355 10.3303 27.7894 10.2903 27.924ZM11.7173 28.0813C11.7221 28.2207 11.5588 28.3362 11.3567 28.3387C11.1534 28.3432 10.989 28.2305 10.9868 28.0934C10.9868 27.9526 11.1464 27.8382 11.3496 27.8348C11.5518 27.8309 11.7173 27.9428 11.7173 28.0813ZM13.1192 28.0279C13.1434 28.1639 13.0029 28.3035 12.8022 28.3407C12.6048 28.3765 12.4221 28.2926 12.3971 28.1578C12.3726 28.0184 12.5156 27.8788 12.7126 27.8427C12.9137 27.808 13.0935 27.8897 13.1192 28.0279Z' />
                </g>
                <defs>
                  <clipPath id='clip0_11_299'>
                    <rect
                      width='34'
                      height='33'
                      fill='white'
                      transform='translate(0.289185 0.694817)'
                    />
                  </clipPath>
                </defs>
              </svg>
              notequal21
            </a>
            <div className={s.headerBody__menu}>
              {isLoader ? <Loader loaderX={loaderX} loaderY={loaderY} /> : ''}
              <div
                className={`
              ${s.headerBody__menuItem} 
              cursorHover 
              link
              `}
                onClick={(e) => {
                  if (location.pathname !== '/') {
                    // withLoader(e.clientX, e.clientY)
                    navigate('/')
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                    // setTimeout(() => {
                    // }, 500)
                  }
                }}
              >
                Главная
              </div>
              <div
                className={`
              ${s.headerBody__menuItem} 
              ${s.count} 
              cursorHover 
              counterLink`}
                onClick={(e) => {
                  if (location.pathname !== '/portfolio') {
                    // withLoader(e.clientX, e.clientY)

                    navigate('portfolio')
                    window.scrollTo({
                      top: 0,
                      behavior: 'smooth',
                    })
                    // setTimeout(() => {
                    // }, 500)
                  }
                }}
              >
                Портфолио
                <span>
                  {projectsCountState > 9 ? '9+' : projectsCountState}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
