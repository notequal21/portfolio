import style from './Portfolio.module.scss'
import projects from '../../store/projects.json'
import FilterPopup from '../popups/Filter/Filter'
import store from '../../store/store'

let Portfolio = () => {

  let allProjectsList = projects.map(item =>
    <PortfolioItem key={item.Id} type={item.Type} name={item.Name} img={item.Img} link={item.Link} />).reverse()

  let reactProjectsList = projects.map(item => {
    let list = []
    if (item.Type === 'react') {
      list.push(<PortfolioItem key={item.Id} type={item.Type} name={item.Name} img={item.Img} link={item.Link} />)
    }
    return list
  }).reverse()

  let landingsProjectsList = projects.map(item => {
    let list = []
    if (item.Type === 'landing') {
      list.push(<PortfolioItem key={item.Id} type={item.Type} name={item.Name} img={item.Img} link={item.Link} />)
    }
    return list
  }).reverse()

  let multipagesProjectsList = projects.map(item => {
    let list = []
    if (item.Type === 'multipage') {
      list.push(<PortfolioItem key={item.Id} type={item.Type} name={item.Name} img={item.Img} link={item.Link} />)
    }
    return list
  }).reverse()


  let applyFilterType = (type) => {
    if (store.filterType === type) {
      store.filterType = 'all'
    } else {
      store.filterType = type
    }
  }

  if (store.filterType === 'all') {
    return (
      <div className={`${style.portfolio}`}>
        <div className="container">
          <div className={`${style.portfolioRow}`}>
            <div className={`${style.portfolio__title}`}>
              Мои работы
            </div>
            <FilterPopup applyFilterType={applyFilterType} />
          </div>
          <div className={`${style.portfolioBody}`}>
            {allProjectsList}
          </div>
        </div>
      </div>
    )
  }
  if (store.filterType === 'react') {
    return (
      <div className={`${style.portfolio}`}>
        <div className="container">
          <div className={`${style.portfolioRow}`}>
            <div className={`${style.portfolio__title}`}>
              Мои работы
            </div>
            <FilterPopup applyFilterType={applyFilterType} />
          </div>
          <div className={`${style.portfolioBody}`}>
            {reactProjectsList}
          </div>
        </div>
      </div>
    )
  }
  if (store.filterType === 'multipage') {
    return (
      <div className={`${style.portfolio}`}>
        <div className="container">
          <div className={`${style.portfolioRow}`}>
            <div className={`${style.portfolio__title}`}>
              Мои работы
            </div>
            <FilterPopup applyFilterType={applyFilterType} />
          </div>
          <div className={`${style.portfolioBody}`}>
            {multipagesProjectsList}
          </div>
        </div>
      </div>
    )
  }
  if (store.filterType === 'landing') {
    return (
      <div className={`${style.portfolio}`}>
        <div className="container">
          <div className={`${style.portfolioRow}`}>
            <div className={`${style.portfolio__title}`}>
              Мои работы
            </div>
            <FilterPopup applyFilterType={applyFilterType} />
          </div>
          <div className={`${style.portfolioBody}`}>
            {landingsProjectsList}
          </div>
        </div>
      </div>
    )
  }
}

let PortfolioItem = (props) => {
  return (
    <a target='_blank' rel='noreferrer' href={props.link} className={`${style.portfolioBody__item}`}>
      <div className={`${style.portfolioBody__itemImg}`}>
        <img src={props.img} alt="WorkImg" />
      </div>
      <div className={`${style.portfolioBody__itemInfo}`}>
        <div className={`${style.portfolioBody__itemName}`}>{props.name}</div>
        <div className={`${style.portfolioBody__itemType}`}>{props.type}</div>
      </div>
    </a>
  )
}

export default Portfolio