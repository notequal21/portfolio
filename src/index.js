import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
      <AppLoader />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();