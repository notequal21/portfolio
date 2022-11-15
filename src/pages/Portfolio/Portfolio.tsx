import { useSelector } from "react-redux"
import s from "./Portfolio.module.scss"

const Portfolio = () => {

  // List of protfolio items
  const projectsListState = useSelector((state: any) => state.projects)

  const projectsList = projectsListState.map((item: any, index: number) =>
    <PortfolioItem
      key={index}
      name={item.Name}
      img={item.Img}
      link={item.Link}
      isBest={item.IsBest}
      type={item.Type}
    />
  ).reverse()



  const bestProjectsList = projectsList.filter((item: any) => item.isBest === true)

  console.log(bestProjectsList);


  return (
    <>
      <div className={s.portfolio}>
        <div className="container">
          <div className={s.portfolioTop}>
            <label className={s.portfolioTop__filterBest}>
              <input type="checkbox" name="" id="" />
              Только лучше работы
            </label>
          </div>
          <div className={s.portfolioBody}>
            {/* {projectsList} */}
            {/* {bestProjectsList} */}
          </div>
        </div>
      </div>
    </>
  )
}

export const PortfolioItem = ({ link, img, name, isSlider, isBest, type }: any) => {

  return (
    <>
      <a
        target='_blank'
        rel='noreferrer'
        href={link}
        data-project-type={type}
        data-isbest={isBest}
        data-isslider={isSlider}
        className={`
        cursorHover
        portfolioLink
        ${s.portfolioBody__item} 
        ${isBest ? s._isBest : ''}
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