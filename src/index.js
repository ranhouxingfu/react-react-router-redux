import React from 'react';
import ReactDOM from 'react-dom';
import  '../node_modules/antd/dist/antd.min.css';
import './styles/index.less';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
