import { useEffect } from "react"
import s from "./Loader.module.scss"

let Loader = ({ loaderX, loaderY }: any) => {

  let posX = loaderX
  let posY = loaderY

  useEffect(() => {
    if (document.querySelector<HTMLElement>(`.${s.loader}`)) {
      document.querySelector<HTMLElement>(`.${s.loader}`)!.style.left = `${posX}px`
      document.querySelector<HTMLElement>(`.${s.loader}`)!.style.top = `${posY}px`
    }
  }, [])

  return (<>
    <div className={s.loader}></div>
  </>)
}

export default Loader