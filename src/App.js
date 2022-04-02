import React, { lazy, Suspense } from "react";
import style from "./app.module.scss"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Contacts from "./components/Contacts/Contacts";
// import Resume from "./components/Resume/Resume";
import Particles from "react-tsparticles";
import particlesConfig from "./assets/particlesConfig.json";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useDispatch, useSelector } from 'react-redux'
import { setLoaderPos, toggleLoader } from './store/loader.js'

// const Header = lazy(() => import("./components/Header/Header"));
const Main = lazy(() => import("./components/Main/Main"));
const Portfolio = lazy(() => import("./components/Portfolio/Portfolio"));

let App = () => {

  const isLoader = useSelector((state) => state.loader.isLoader)
  const loaderX = useSelector((state) => state.loader.pos.x)
  const loaderY = useSelector((state) => state.loader.pos.y)
  const dispatch = useDispatch()

  const withLoader = (x, y) => {
    dispatch(toggleLoader())
    dispatch(setLoaderPos({ x, y }))
    setTimeout(() => {
      dispatch(toggleLoader())
    }, 1000)
  }

  let changeCursor = () => {
    const cursor = document.querySelector(`.cursor`)
    const follower = document.querySelector(`.follower`)
    let links = document.querySelectorAll(`.link`)

    let posX = 0
    let posY = 0

    let mouseX = 0
    let mouseY = 0

    gsap.to({}, {
      duration: 0.01,
      repeat: -1,
      onRepeat: () => {
        posX += (mouseX - posX) / 5
        posY += (mouseY - posY) / 5

        gsap.set(follower, {
          css: {
            left: posX - 12,
            top: posY - 12,
          }
        })
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY,
          }
        })
      }
    })

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    })

    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        cursor.classList.add('active')
        follower.classList.add('active')
      })
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('active')
        follower.classList.remove('active')
      })
    })
  }

  useEffect(() => {
    setInterval(() => {
    }, 1000)
    changeCursor()
  }, [])

  return (
    <>
      <div className={'cursor'}></div>
      <div className={'follower'}></div>
      <div className={`${style.wrapper}`}>
        <Particles params={particlesConfig} className={style.particles} />
        <div className={`${style.content}`}>
          <Header withLoader={withLoader} isLoader={isLoader} />

          <Routes>
            <Route path='*' element={
              <Suspense fallback={<div></div>}>
                <Portfolio />
              </Suspense>
            } />
            <Route path='/main' element={
              <Suspense fallback={<div></div>}>
                <Main withLoader={withLoader} />
              </Suspense>
            } />

            {/* <Route path='portfolio' element={<Portfolio />} /> */}
            {/* <Route path='contacts' element={<Contacts />} /> */}
            {/* <Route path='resume' element={<Resume />} /> */}
          </Routes>

          <Footer withLoader={withLoader} />
        </div>

      </div>
    </>
  );
}

export default App;
