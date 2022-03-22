import NoFrameworkSvg from '../../../assets/icons/MultipageSvg'
import ReactSvg from '../../../assets/icons/ReactSvg'
import VueSvg from '../../../assets/icons/VueSvg'
import style from './Filter.module.scss'

let Filter = ({ applyFilterType, filterType }) => {
  return (
    <>
      <div className={`${style.filter}`}>
        <button
          onClick={() => {
            applyFilterType('react')
          }}
          className={`${style.filter__item} link ${filterType === 'react' ? style.active : ''}`}>
          <ReactSvg />
        </button>
        <button
          onClick={() => {
            applyFilterType('vue')
          }}
          className={`${style.filter__item} link ${filterType === 'vue' ? style.active : ''}`}>
          <VueSvg />
        </button>
        <button
          onClick={() => {
            applyFilterType('nofw')
          }}
          className={`${style.filter__item} link ${filterType === 'nofw' ? style.active : ''}`}>
          <NoFrameworkSvg />
        </button>
      </div>
    </>
  )
}

export default Filter