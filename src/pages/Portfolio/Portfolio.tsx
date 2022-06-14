import s from "./Portfolio.module.scss"
import projects from "../../store/projects.json"

const Portfolio = () => {

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
  console.log(isSlider);

  return (
    <>
      <a
        target='_blank'
        rel='noreferrer'
        href={link}
        className={`
        link
        ${s.portfolioBody__item} 
        ${isSlider ? s.slider : ''}
        `}>
        <img src={`./assets/img/${img}`} alt="" />
        <span>{name}</span>
      </a>
    </>
  )
}

export default Portfolio