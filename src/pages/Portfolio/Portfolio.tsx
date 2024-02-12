// import { useRef, useState } from "react"
import { useSelector } from 'react-redux';
// import { setCursorUpdate } from "../../store/loader"
// import { CSSTransition, SwitchTransition } from "react-transition-group"
import s from './Portfolio.module.scss';
import Filter from './modules/Filter';
import { useState } from 'react';
import Atropos from 'atropos/react';
import { useMediaQuery } from 'usehooks-ts';

const Portfolio = () => {
  // List of protfolio items
  const projectsListState = useSelector((state: any) => state.projects);

  const [projectsList, setProjectsList] = useState(
    projectsListState
      .map((item: any, index: number) => (
        <PortfolioItem
          key={index}
          name={item.Name}
          img={item.Img}
          link={item.Link}
          isBest={item.IsBest}
          type={item.Type}
        />
      ))
      .reverse()
  );

  return (
    <>
      <div className={s.portfolio}>
        <div className='container'>
          <Filter
            projectsListState={projectsListState}
            setProjectsList={setProjectsList}
          />
          <div className={s.portfolioBody}>{projectsList}</div>
        </div>
      </div>
    </>
  );
};

export const PortfolioItem = ({
  link,
  img,
  name,
  isSlider,
  isBest,
  type,
}: any) => {
  const isMobile = useMediaQuery('(max-width:992px)');
  // @ts-ignore
  const isSafari =
    // @ts-ignore
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(
      // @ts-ignore
      !window['safari'] ||
        // @ts-ignore
        (typeof safari !== 'undefined' && safari.pushNotification)
    );

  return (
    <>
      {isMobile || isSafari ? (
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
        ${isSafari ? s.isSafari : ''}
        `}
        >
          <picture>
            <source type='image/webp' srcSet={`./assets/img/${img}.webp`} />
            <source type='image/jpeg' srcSet={`./assets/img/${img}.jpg`} />
            <img src={`./assets/img/${img}.jpg`} alt='' />
          </picture>
          <span>{name}</span>
        </a>
      ) : (
        <Atropos className={s.atropos}>
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
        `}
          >
            <picture>
              <source type='image/webp' srcSet={`./assets/img/${img}.webp`} />
              <source type='image/jpeg' srcSet={`./assets/img/${img}.jpg`} />
              <img src={`./assets/img/${img}.jpg`} alt='' />
            </picture>
            <span>{name}</span>
          </a>
        </Atropos>
      )}
    </>
  );
};

export default Portfolio;
