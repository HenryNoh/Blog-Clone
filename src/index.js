import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import logger from 'redux-logger';
import App from './App';
import rootreducer from './modules/index';

const store = createStore(
    rootreducer,
    composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
