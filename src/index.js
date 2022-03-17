import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import { HashRouter } from "react-router-dom";
const App = lazy(() => import("./App"));

function AppLoader() {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <App />
    </Suspense>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <AppLoader />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();