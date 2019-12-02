import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Page from './components/Page/Page';
import chartsReduser from './reducers/chartsReduser';

const store = createStore(chartsReduser);

ReactDOM.render(<Provider store={store}><Page/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
