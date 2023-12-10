import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/main-component/App/App';
import { QueryClient, QueryClientProvider } from 'react-query'
import reportWebVitals from './reportWebVitals';
import '../node_modules/react-modal-video/scss/modal-video.scss';
import './css/font-awesome.min.css';
import './css/flaticon_conat-flat.css';
import "./css/themify-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css';
import './css/header.css';
import './css/footer.css';
import './css/owl.css';
import './css/animate.css';
import './css/custom-animate.css';
import './css/style.css';
import './css/responsive.css';

import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/index";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </QueryClientProvider>
);


reportWebVitals();
