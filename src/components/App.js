import React from 'react';
import './../styles/App.less';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../routes/routes';
import { Provider } from 'react-redux';
import store from '../redux/store/index';
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                        <Routes />
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
