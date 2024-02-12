import TelegramSvg from '../../assets/img/icons/TelegramSvg'
import s from './TgLink.module.scss'

const TgLink = () => {
  return (
    <a href='https://t.me/notequal21' target={'_blank'} className={s.link}>
      <TelegramSvg />
      <span></span>
    </a>
  )
}

export default TgLink
