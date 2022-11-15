import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import s from "./App.module.scss";
import Main from "./pages/Main/Main";
import { useCallback, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderPos, toggleLoader } from "./store/loader";

function App() {
  let location = useLocation();

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
  const [projectType, setProjectType] = useState('React')
  const [projectName, setProjectName] = useState('')
  let changeCursor = useCallback(() => {
    const cursor = document.querySelector(`.cursor`)
    const follower = document.querySelector(`.follower`)
    const cursorHover = document.querySelectorAll(`.cursorHover`)

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

    cursorHover.forEach((link: any) => {

      link.addEventListener('mouseenter', () => {
        cursor?.classList.add('active')
        if (link.classList.contains('link')) {
          follower?.classList.add('active')
        } else if (link.classList.contains('portfolioLink')) {
          follower?.classList.add('activePortfolio')
          if (link.dataset.isbest === 'true') {
            follower?.classList.add('_isBest')
          }
          if (link.dataset.isslider === 'true') {
            follower?.classList.add('_isSlider')
          }
          setProjectName(link.childNodes[1].innerHTML)
          setProjectType(link.dataset.projectType)
        } else if (link.classList.contains('counterLink')) {
          follower?.classList.add('activeCounter')
        } else if (link.classList.contains('_navigation-prev')) {
          follower?.classList.add('activeNavigation-prev')
        } else if (link.classList.contains('_navigation-next')) {
          follower?.classList.add('activeNavigation-next')
        }
      })
      link.addEventListener('mouseleave', () => {
        cursor?.classList.remove('active')
        if (link.classList.contains('link')) {
          follower?.classList.remove('active')
        } else if (link.classList.contains('portfolioLink')) {
          follower?.classList.remove('activePortfolio')
          if (follower?.classList.contains('_isBest')) {
            follower?.classList.remove('_isBest')
          }
          if (follower?.classList.contains('_isSlider')) {
            follower?.classList.remove('_isSlider')
          }
        } else if (link.classList.contains('counterLink')) {
          follower?.classList.remove('activeCounter')
        } else if (follower?.classList.contains('activeNavigation-prev')) {
          follower?.classList.remove('activeNavigation-prev')
        } else if (follower?.classList.contains('activeNavigation-next')) {
          follower?.classList.remove('activeNavigation-next')
        }
      })
    })
  }, [])

  // projects count
  const projectsCountState = useSelector((state: any) => state.projects.length)

  useEffect(() => {
    // custom cursor
    changeCursor()

  }, [changeCursor, dispatch, location])

  return (
    <>
      {/* Custom Cursor */}
      <div className={'cursor'}></div>
      <div className={'follower'}>
        <div className="follower__counter">
          {projectsCountState}
        </div>
        <div className="follower__projectType">
          {projectType}
        </div>
        <div className="follower__projectName">
          <span>
            <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5438 0.244843C12.1231 5.94514 14.3632 8.08026 20.4158 10.2448H0.415771C6.36304 7.97114 8.9937 6.05081 10.5438 0.244843Z" />
            </svg>
          </span>
          {projectName}
        </div>
        <div className="follower__navigation">
          <div className="follower__navigationPrev">
            <svg width="444" height="448" viewBox="0 0 444 448" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_16_2)">
                <path fillRule="evenodd" clipRule="evenodd" d="M424.231 246.334C436.632 246.334 445.346 256.313 443.367 268.49C443.367 268.49 444.815 261.344 443.331 268.667C422.633 370.973 332.2 448 223.784 448C100.076 448 -0.215964 347.713 -0.215975 224C-0.215986 100.287 100.076 1.67153e-05 223.784 5.90045e-06C332.081 -3.5672e-06 422.424 76.8547 443.264 179C444.78 186.427 443.373 179.536 443.373 179.536C445.202 191.755 436.623 201.667 424.233 201.667L212.487 201.667C204.232 201.667 202.304 196.933 208.174 191.099L248.909 150.542C270.024 129.479 238.341 97.8914 217.226 118.949L125.862 208.746C117.029 217.397 117.044 231.377 125.972 240.038L217.226 329.065C238.341 350.122 270.024 318.528 248.909 297.471L208.174 256.909C202.299 251.07 204.268 246.341 212.487 246.341L424.231 246.334Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_16_2">
                  <rect width="444" height="448" fill="white" transform="translate(444 448) rotate(180)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="follower__navigationNext">
            <svg width="444" height="448" viewBox="0 0 444 448" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_16_2)">
                <path fillRule="evenodd" clipRule="evenodd" d="M19.7688 201.666C7.36777 201.666 -1.34584 191.687 0.632828 179.51C0.632828 179.51 -0.815038 186.656 0.669286 179.333C21.3666 77.0267 111.8 0 220.216 0C343.924 0 444.216 100.287 444.216 224C444.216 347.713 343.924 448 220.216 448C111.919 448 21.576 371.145 0.735957 269C-0.779643 261.573 0.626582 268.464 0.626582 268.464C-1.20155 256.245 7.37658 246.333 19.7666 246.333H231.513C239.768 246.333 241.696 251.067 235.826 256.901L195.091 297.458C173.976 318.521 205.659 350.109 226.774 329.051L318.138 239.254C326.971 230.603 326.956 216.623 318.028 207.962L226.774 118.935C205.659 97.8779 173.976 129.472 195.091 150.529L235.826 191.091C241.701 196.93 239.732 201.659 231.513 201.659L19.7688 201.666Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_16_2">
                  <rect width="444" height="448" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
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
