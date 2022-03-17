import style from "./app.module.scss"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";
import Resume from "./components/Resume/Resume";
import Particles from "react-tsparticles";
import particlesConfig from "./assets/particlesConfig.json";

function App() {
  return (
    <>
      <div className={`${style.wrapper}`}>
        <Particles params={particlesConfig} className={style.particles} />
        <div className={`${style.content}`}>
          <Header />

          <Routes>

            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='*' element={<Main />} />

            {/* <Route path='portfolio' element={<Portfolio />} /> */}
            {/* <Route path='contacts' element={<Contacts />} /> */}
            {/* <Route path='resume' element={<Resume />} /> */}
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
