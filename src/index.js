import React from 'react'; //eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom';
import './index.css';
import {Route,BrowserRouter as Router,Link} from 'react-router-dom';

import HomePage from './component/HomePage/HomePage';
import CoinInfo from './component/CoinInfo/CoinInfo';

const routing=


<Router>
		<Link to="/CoinInfo"></Link>

		<Route exact path="/" component={HomePage}/>
		<Route path="/CoinInfo" component={CoinInfo}/>
</Router>

ReactDOM.render(
	routing,
	document.getElementById('root')
	);