import Popup from 'reactjs-popup';
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
              React
            </button>
            <button onClick={() => {
              close()
              applyFilterType('multipage')
            }} className={`filterBody__item 
            ${filterType === 'multipage' ? 'active' : ''}`}>
              Multipages
            </button>
            <button onClick={() => {
              close()
              applyFilterType('landing')
            }} className={`filterBody__item 
            ${filterType === 'landing' ? 'active' : ''}`}>
              Landings
            </button>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default FilterPopup