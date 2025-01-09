import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor } from './redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { app } from './firebae.config';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} app={app}>
    <PersistGate Loading={"loading"} persistor={persistor} >
        <App/>
    </PersistGate>
    </Provider>
);
