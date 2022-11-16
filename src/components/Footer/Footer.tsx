import s from "./Footer.module.scss"

const Footer = ({ ...props }: any) => {

  return (
    <>
      <footer className={s.footer}>
        <div className="container">
          <div className={s.footerBody}>

          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer