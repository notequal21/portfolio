import s from './Stats.module.scss'

const StatsComponent = () => {
  return (
    <div className={s.stats}>
      <StatsItem value='3+' title={`Лет опыта`} />
      <StatsItem value='20+' title='Довольных клиентов' />
      <StatsItem value='50+' title='Успешных проектов' />
    </div>
  )
}

const StatsItem = ({ value, title }) => {
  return (
    <div className={s.stats__item}>
      <div className={s.stats__itemValue}>{value}</div>
      <div className={s.stats__itemTitle}>{title}</div>
    </div>
  )
}

export default StatsComponent
