import style from "./app.module.scss"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <>
      <div className={`${style.wrapper}`}>
        <div className={`${style.content}`}>
          <Header />

          <Routes>
            <Route path='*' element={<Main />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='contacts' element={<Contacts />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
