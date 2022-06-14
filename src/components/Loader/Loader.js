import { useEffect } from "react"
import s from "./Loader.module.scss"

let Loader = ({ loaderX, loaderY }) => {

  let posX = loaderX
  let posY = loaderY

  useEffect(() => {
    document.querySelector(`.${s.loader}`).style.left = `${posX}px`
    document.querySelector(`.${s.loader}`).style.top = `${posY}px`
  }, [])

  return (<>
    <div className={s.loader}></div>
  </>)
}

export default Loader