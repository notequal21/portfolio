import style from "./app.module.scss"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import Resume from "./components/Resume/Resume";
import Particles from "react-tsparticles";
import particlesConfig from "./assets/particlesConfig.json";
import { useEffect } from "react";
import { gsap } from "gsap";
let App = () => {

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
          <Header />

          <Routes>
            <Route path='*' element={<Portfolio />} />
            <Route path='/main' element={<Main />} />

            {/* <Route path='portfolio' element={<Portfolio />} /> */}
            {/* <Route path='contacts' element={<Contacts />} /> */}
            {/* <Route path='resume' element={<Resume />} /> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
