import Popup from 'reactjs-popup'
import NoFrameworkSvg from '../../../assets/icons/MultipageSvg'
import ReactSvg from '../../../assets/icons/ReactSvg'
import VueSvg from '../../../assets/icons/VueSvg'
import './Filter.scss'

let FilterPopup = ({ applyFilterType, filterType }) => {
  return (
    <Popup
      trigger={<button className="filterButton"> FILTER </button>}
      modal
      nested
      lockScroll
    >
      {close => (
        <div className='filter'>
          <button className='filter__close' onClick={close}>
            &times;
          </button>
          <div className='filter__title'> Filter </div>
          <div className='filterBody'>
            <button onClick={() => {
              close()
              applyFilterType('react')
            }} className={`filterBody__item 
            ${filterType === 'react' ? 'active' : ''}`}>
              <ReactSvg />
            </button>
            <button onClick={() => {
              close()
              applyFilterType('vue')
            }} className={`filterBody__item 
            ${filterType === 'vue' ? 'active' : ''}`}>
              <VueSvg />
            </button>
            <button onClick={() => {
              close()
              applyFilterType('nofw')
            }} className={`filterBody__item 
            ${filterType === 'nofw' ? 'active' : ''}`}>
              <NoFrameworkSvg />
            </button>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default FilterPopup