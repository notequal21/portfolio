import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import s from "./App.module.scss";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />

        <div className={s.content}>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
