import style from './Portfolio.module.scss'
import projects from '../../store/projects.json'
import FilterPopup from '../popups/Filter/Filter';

let Portfolio = () => {

  let projectsList = projects.map(item =>
    <PortfolioItem key={item.Id} type={item.Type} name={item.Name} img={item.Img} link={item.Link} />).reverse()

  return (
    <div className={`${style.portfolio}`}>
      <div className="container">
        <div className={`${style.portfolioRow}`}>
          <div className={`${style.portfolio__title}`}>
            Мои работы
          </div>
          <FilterPopup />
        </div>
        <div className={`${style.portfolioBody}`}>
          {projectsList}
        </div>
      </div>
    </div>
  )
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