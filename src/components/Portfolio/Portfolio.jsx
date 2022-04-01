import React, { lazy } from "react";
import style from './Portfolio.module.scss'
import projects from '../../store/projects.json'
import { useState } from 'react'
import Filter from '../common/Filter/Filter'
import { useEffect } from 'react'

const PortfolioItem = lazy(() => import("./PortfolioItem/PortfolioItem"));

let Portfolio = (props) => {

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

  useEffect(() => {
    // props.links = document.querySelectorAll(`.link`)
  })

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

export default Portfolio