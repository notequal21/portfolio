import Popup from 'reactjs-popup';
import './Filter.scss'

let FilterPopup = ({ applyFilterType }) => {
  return (
    <Popup
      trigger={<button className="button"> FILTER </button>}
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
            }} className='filterBody__item'>
              React
            </button>
            <button onClick={() => {
              close()
              applyFilterType('multipage')
            }} className='filterBody__item'>
              Multipages
            </button>
            <button onClick={() => {
              close()
              applyFilterType('landing')
            }} className='filterBody__item'>
              Landings
            </button>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default FilterPopup