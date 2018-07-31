import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Route from './Route';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';
ReactDOM.render(<Route />, document.getElementById('root'));
registerServiceWorker();
