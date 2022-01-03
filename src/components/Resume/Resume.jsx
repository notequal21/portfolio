import style from './Resume.module.scss'

let Resume = () => {
  return (
    <div className={`${style.resume}`}>
      <div className='container'>
        <div className={`${style.resumeBody}`}>
          <div className={`${style.resumeBody__item}`}>
            item1
          </div>
          <div className={`${style.resumeBody__item}`}>
            item2
          </div>
          <div className={`${style.resumeBody__item}`}>
            item3
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume