import s from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={s.contacts}>
      <div className='container'>
        <div className={s.contacts__title}>КОНТАКТЫ</div>
        <ul className={s.contactsBody}>
          <li className={s.contactsBody__item}>
            <a href='https://t.me/notequal21' target={'_blank'}>
              Telegram
            </a>
          </li>
          <li className={s.contactsBody__item}>
            <a href='https://vk.com/notequal21' target={'_blank'}>
              VK
            </a>
          </li>
          <li className={s.contactsBody__item}>
            <a
              href='https://www.fl.ru/users/notequal2/portfolio/?ref=225608'
              target={'_blank'}
            >
              Fl.ru
            </a>
          </li>
          <li className={s.contactsBody__item}>
            <a href='https://www.instagram.com/notequal21/' target={'_blank'}>
              Instagram
            </a>
          </li>
          <li className={s.contactsBody__item}>
            <a
              href='https://www.youtube.com/channel/UCApqtMBbo4636lbIpXYMbzw'
              target={'_blank'}
            >
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
