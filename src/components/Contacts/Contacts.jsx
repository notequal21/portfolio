import style from './Contacts.module.scss'
import myImg from '../../assets/img/components/main/img.jpg'

let Contacts = () => {
  return (
    <div className={`${style.contacts}`}>
      <div className="container">
        <div className={`${style.contacts__title}`}>
          Контакты
        </div>
        <div className={`${style.contactsBody}`}>
          <div className={`${style.contactsBody__col}`}>
            <div className={`${style.contactsBody__image}`}>
              <img src={myImg} alt="" />
            </div>
          </div>
          <div className={`${style.contactsBody__col}`}>
            <div className={`${style.contactsBody__name}`}>
              Кирилл Махнёв
            </div>
            <div className={`${style.contactsBody__pos}`}>
              Frontend Developer
            </div>
            <div className={`${style.contactsBody__about}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam cumque distinctio quidem vitae consequuntur hic provident velit aspernatur perferendis, id modi voluptas quod. Tenetur, itaque. Tenetur quaerat assumenda nostrum consequuntur?
            </div>
            <div className={`${style.contactsBody__links}`}>
              <a target='_blank' rel='noreferrer' href="https://t.me/notequal21">TELEGRAM</a>
              <a target='_blank' rel='noreferrer' href="https://vk.com/notequal21">VK</a>
              <a target='_blank' rel='noreferrer' href="https://www.instagram.com/notequal21/">INSTA</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts