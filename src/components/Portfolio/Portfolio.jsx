import style from './Portfolio.module.scss'
import projects from '../../store/projects.json'
import { useState } from 'react'
import VueSvg from '../../assets/icons/VueSvg'
import ReactSvg from '../../assets/icons/ReactSvg'
import NoFrameworkSvg from '../../assets/icons/MultipageSvg'
import Filter from '../common/Filter/Filter'

let Portfolio = () => {

  const [filterType, changeFilterType] = useState('all')

  const [projectsList, changeProjectsList] = useState(projects.map(item =>
    <PortfolioItem key={item.Id} type={item.Type} name={item.Name} img={item.Img} link={item.Link} />).reverse())

  let applyFilterType = (type = 'all') => {
    if (filterType === type) {
      changeFilterType('all')
      changeProjectsList(projects.map(item =>
        <PortfolioItem key={item.Id} type={item.Type}
          name={item.Name} img={item.Img} link={item.Link} />)
        .reverse())
    }
    else {
      changeFilterType(type)
      changeProjectsList(projects.filter(item => item.Type === type).reverse()
        .map(item => <PortfolioItem key={item.Id} type={item.Type}
          name={item.Name} img={item.Img} link={item.Link} />))

    }
  }

  return (
    <div className={`${style.portfolio}`}>
      <div className="container">
        <div className={`${style.portfolioRow}`}>
          <div className={`${style.portfolio__title}`}>
            Мои работы
          </div>
          <Filter applyFilterType={applyFilterType} filterType={filterType} />
        </div>
        <div className={`${style.portfolioBody}`}>

          {projectsList}

        </div>
      </div>
    </div>
  )
}

let PortfolioItem = ({ link, img, name, type }) => {
  return (
    <a target='_blank' rel='noreferrer' href={link} className={`${style.portfolioBody__item}`}>
      <div className={`${style.portfolioBody__itemImg}`}>
        <img src={`./img/${img}`} alt="WorkImg" />
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

export default Portfolio