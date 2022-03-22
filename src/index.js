import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store'
import { Provider } from 'react-redux'
import { HashRouter } from "react-router-dom";
const App = lazy(() => import("./App"));

function AppLoader() {
  return (
    <Provider store={store}>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <App />
      </Suspense>
    </Provider>
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