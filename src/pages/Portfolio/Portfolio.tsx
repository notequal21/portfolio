import { useRef, useState } from "react"
import { useSelector } from "react-redux"
// import { CSSTransition, SwitchTransition } from "react-transition-group"
import s from "./Portfolio.module.scss"

const Portfolio = () => {
  // List of protfolio items
  const projectsListState = useSelector((state: any) => state.projects)

  // Projects list 
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

  // Filtered projects list for best projects
  const bestProjectsList = projectsListState.filter((item: any) => item.IsBest === true).map((item: any, index: number) =>
    <PortfolioItem
      key={index}
      name={item.Name}
      img={item.Img}
      link={item.Link}
      isBest={item.IsBest}
      type={item.Type}
    />
  ).reverse()

  // Best projects toggler
  const filterBtn = useRef(null)
  const [isBestProjects, setIsBestProjects] = useState(false)

  const toggleProjectList = () => {
    setIsBestProjects(!isBestProjects)
  }

  // animation
  // const helloRef = useRef(null);
  // const goodbyeRef = useRef(null);
  // const nodeRef = isBestProjects ? helloRef : goodbyeRef;

  return (
    <>
      <div className={s.portfolio}>
        <div className="container">
          <div className={s.portfolioTop}>
            <label className={`
            ${s.portfolioTop__filterBest} 
            ${isBestProjects ? s.active : ''} 
            cursorHover 
            bestLink
            `}>
              <svg width="688" height="660" viewBox="0 0 688 660" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_19_81)">
                  <path d="M650.793 268.147C593.861 230.464 654.877 174.813 623.028 128.147C601.211 96.1774 546.725 107.032 518.028 91.1627C494.695 68.996 487.809 13.8133 450.596 3.08002C414.544 -10.332 376.976 30.8507 344.544 34.116C312.112 30.965 274.544 -10.452 238.143 2.50135C200.924 13.2358 194.393 68.304 170.711 90.584C142.361 106.568 87.8775 95.5996 65.7108 127.568C42.3775 158.016 69.4452 206.552 62.7941 238.401C48.7941 267.803 -1.37255 290.901 0.0287843 329.871C-1.25247 368.84 48.6795 392.053 62.7941 421.34C69.4452 453.189 42.1435 501.725 65.7108 532.173C87.5281 564.143 142.013 553.288 170.711 569.157C213.06 625.157 213.528 693.641 306.044 640.793C336.377 621.777 352.711 621.892 383.044 640.793C435.544 674.627 474.861 660.741 497.377 602.643C516.393 535.673 586.742 577.793 623.028 532.643C646.362 502.195 619.294 453.659 625.945 421.809V421.799C632.08 410.273 640.543 400.143 650.794 392.05C700.263 350.634 700.611 309.216 650.794 268.148L650.793 268.147ZM544.392 289.731L437.876 367.433L478.36 493.199C480.568 500.391 477.964 508.193 471.881 512.62C465.798 517.042 457.574 517.115 451.408 512.797L344.544 434.865L237.68 512.562C231.575 516.964 223.341 516.969 217.237 512.578C211.128 508.187 208.508 500.385 210.727 493.198L251.211 367.433L144.347 289.735V289.73C138.195 285.324 135.597 277.449 137.93 270.252C140.425 263.194 147.128 258.507 154.613 258.585H287.029L327.862 132.934C330.284 125.783 336.997 120.976 344.545 120.976C352.092 120.976 358.805 125.783 361.227 132.934L402.061 258.585H534.129C541.613 258.507 548.317 263.194 550.811 270.252C553.139 277.449 550.546 285.325 544.395 289.73L544.392 289.731Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_19_81">
                    <rect width="688" height="660" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Только лучше работы
              <input onInput={toggleProjectList} ref={filterBtn} type="checkbox" />
              <div className={s.portfolioTop__filterBest__toggler}>
                <span></span>
              </div>
            </label>
          </div>
          <div className={s.portfolioBody}>
            {/* {isBestProjects ? bestProjectsList : projectsList} */}
            {isBestProjects ? bestProjectsList : projectsList}
          </div>
          {/* <SwitchTransition mode={'out-in'}>
            <CSSTransition
              key={isBestProjects}
              nodeRef={nodeRef}
              addEndListener={(done) => {
                nodeRef.current.addEventListener("transitionend", done, false);
              }}
              classNames="item"
            >
              <div ref={nodeRef} className={s.portfolioBody}>
                {isBestProjects ? bestProjectsList : projectsList}
              </div>
            </CSSTransition>
          </SwitchTransition> */}
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