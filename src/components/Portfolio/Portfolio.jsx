import style from './Portfolio.module.scss'
import projects from '../../store/projects.json'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

let Portfolio = () => {

  let projectsList = projects.map(item =>
    <PortfolioItem key={item.Id} type={item.Type} name={item.Name} img={item.Img} link={item.Link} />).reverse()

  return (
    <div className={`${style.portfolio}`}>
      <div className="container">
        <div className={`${style.portfolioRow}`}>
          <div className={`${style.portfolio__title}`}>
            Мои работы
          </div>
          <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
            nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  &times;
                </button>
                <div className="header"> Modal Title </div>
                <div className="content">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                  Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                  delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                  commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                  explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                </div>
                <div className="actions">
                  <Popup
                    trigger={<button className="button"> Trigger </button>}
                    position="top center"
                    nested
                  >
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                      magni omnis delectus nemo, maxime molestiae dolorem numquam
                      mollitia, voluptate ea, accusamus excepturi deleniti ratione
                      sapiente! Laudantium, aperiam doloribus. Odit, aut.
                    </span>
                  </Popup>
                  <button
                    className="button"
                    onClick={() => {
                      console.log('modal closed ');
                      close();
                    }}
                  >
                    close modal
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div className={`${style.portfolioBody}`}>
          {projectsList}
        </div>
      </div>
    </div>
  )
}

let PortfolioItem = (props) => {
  return (
    <a target='_blank' rel='noreferrer' href={props.link} className={`${style.portfolioBody__item}`}>
      <div className={`${style.portfolioBody__itemImg}`}>
        <img src={props.img} alt="WorkImg" />
      </div>
      <div className={`${style.portfolioBody__itemInfo}`}>
        <div className={`${style.portfolioBody__itemName}`}>{props.name}</div>
        <div className={`${style.portfolioBody__itemType}`}>{props.type}</div>
      </div>
    </a>
  )
}

export default Portfolio