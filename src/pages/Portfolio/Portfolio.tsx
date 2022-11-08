import s from "./Portfolio.module.scss"
import projects from "../../store/projects.json"

const Portfolio = () => {

  // List of protfolio items
  const projectsList = projects.map(item =>
    <PortfolioItem key={item.Id} name={item.Name} img={item.Img} link={item.Link} />
  ).reverse()


  return (
    <>
      <div className={s.portfolio}>
        <div className="container">
          <div className={s.portfolioBody}>
            {projectsList}
          </div>
        </div>
      </div>
    </>
  )
}

export const PortfolioItem = ({ link, img, name, isSlider }: any) => {

  return (
    <>
      <a
        target='_blank'
        rel='noreferrer'
        href={link}
        className={`
        portfolioLink
        ${s.portfolioBody__item} 
        ${isSlider ? s.slider : ''}
        `}>
        <picture>
          <source type="image/webp" srcSet={`./assets/img/${img}.webp`} />
          <source type="image/jpeg" srcSet={`./assets/img/${img}.jpg`} />
          <img src={`./assets/img/${img}.jpg`} alt="" />
        </picture>
        <span>{name}</span>
      </a>
    </>
  )
}

export default Portfolio