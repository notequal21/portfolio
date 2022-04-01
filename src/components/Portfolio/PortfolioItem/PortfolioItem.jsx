import { LazyLoadImage } from 'react-lazy-load-image-component';
import VueSvg from '../../../assets/icons/VueSvg'
import ReactSvg from '../../../assets/icons/ReactSvg'
import NoFrameworkSvg from '../../../assets/icons/MultipageSvg'
import style from './PortfolioItem.module.scss'

let PortfolioItem = ({ link, img, name, type }) => {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      href={link}
      className={`${style.portfolioBody__item} link link_portfolio`}>
      <div className={`${style.portfolioBody__itemImg}`}>
        <LazyLoadImage
          src={`./img/${img}`}
          height={'100%'}
          width={'100%'}
          alt="WorkImg"
          effect="blur" />
        {/* <img src={`./img/${img}`} alt="WorkImg" /> */}
      </div>
      <div className={`${style.portfolioBody__itemInfo}`}>
        <div className={`${style.portfolioBody__itemName}`}>{name}</div>
        <div className={`${style.portfolioBody__itemType}`}>
          {type === 'react' ? <ReactSvg /> : ''}
          {type === 'vue' ? <VueSvg /> : ''}
          {type === 'nofw' ? <NoFrameworkSvg /> : ''}
        </div>
      </div>
    </a>
  )
}

export default PortfolioItem