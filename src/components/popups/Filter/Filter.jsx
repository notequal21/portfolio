import Popup from 'reactjs-popup';
import './Filter.scss'

let FilterPopup = () => {
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
            <div className='filterBody__item'>
              PortfolioItem
            </div>
            <div className='filterBody__item'>
              PortfolioItem2
            </div>
            <div className='filterBody__item'>
              PortfolioItem3
            </div>
          </div>
        </div>
      )}
    </Popup>
  )
}

export default FilterPopup