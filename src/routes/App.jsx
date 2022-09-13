import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../containers/layout';
import Checkout from '../pages/checkout';
import CreateAccount from '../pages/CreateAccount';
import Home from '../pages/home';
import Login from '../pages/login';
import MyAccount from '../pages/MyAcount';
import NewPassword from '../pages/NewPassword';
import NotFound from '../pages/NotFound';
import Orders from '../pages/order';
import PasswordRecovery from '../pages/recoveryPassword';
import SendEmail from '../pages/SendEmail';

import '../styles/global.css';


const App = () => {
	return (
		<BrowserRouter>
		<Layout>
			<Routes>
			    	<Route exact path="/" element={ <Home/> } />
					<Route exact path="/Login" element={ <Login/> } />
					<Route exact path="/Password-recovery" element={ <PasswordRecovery/> } />
					<Route exact path="/Send-email" element={ <SendEmail/> } />
					<Route exact path="/New-password" element={ <NewPassword/> } />
					<Route exact path="/Account" element={ <MyAccount/> } />
					<Route exact path="/Signup" element={ <CreateAccount/> } />
					<Route exact path="/Checkout" element={ <Checkout/> } />
					<Route exact path="/Orders" element={ <Orders/> } />
					<Route path="*" element={ <NotFound/> } />
			</Routes>
		</Layout>
		</BrowserRouter>
	);
}

export default App;
