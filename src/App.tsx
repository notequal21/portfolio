import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import s from "./App.module.scss";
import Main from "./pages/Main/Main";
import { useCallback, useEffect } from 'react';
import { gsap } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderPos, toggleLoader } from "./store/loader";

function App() {

  const isLoader = useSelector((state: any) => state.loader.isLoader)
  const dispatch = useDispatch()

  // Loader for change page
  const withLoader = (x: any, y: any) => {
    dispatch(toggleLoader())
    dispatch(setLoaderPos({ x, y }))
    setTimeout(() => {
      dispatch(toggleLoader())
    }, 1000)
  }

  // Custom cursor
  let changeCursor = useCallback(() => {
    const cursor = document.querySelector(`.cursor`)
    const follower = document.querySelector(`.follower`)
    let cursorHover = document.querySelectorAll(`.cursorHover`)

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

    cursorHover.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        cursor?.classList.add('active')
        if (link.classList.contains('link')) {
          follower?.classList.add('active')
        } else if (link.classList.contains('portfolioLink')) {
          follower?.classList.add('activePortfolio')
        } else if (link.classList.contains('counterLink')) {
          follower?.classList.add('activeCounter')
        }
      })
      link.addEventListener('mouseleave', () => {
        cursor?.classList.remove('active')
        if (link.classList.contains('link')) {
          follower?.classList.remove('active')
        } else if (link.classList.contains('portfolioLink')) {
          follower?.classList.remove('activePortfolio')
        } else if (link.classList.contains('counterLink')) {
          follower?.classList.remove('activeCounter')
        }
      })
    })
  }, [])

  // projects count
  const projectsCountState = useSelector((state: any) => state.projects.length)


  useEffect(() => {
    // custom cursor
    changeCursor()
  }, [changeCursor])

  return (
    <>
      {/* Custom Cursor */}
      <div className={'cursor'}></div>
      <div className={'follower'}>
        <div className="follower__counter">
          {projectsCountState}
        </div>
      </div>

      {/* Content */}
      <div className="wrapper">
        <div className="content">
          <Header withLoader={withLoader} isLoader={isLoader} />

          <div className={s.content}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>

          <Header withLoader={withLoader} isLoader={isLoader} />
        </div>
      </div>
    </>
  );
}

export default App;
