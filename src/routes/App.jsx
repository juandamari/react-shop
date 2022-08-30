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
			<Route exact path="/" component={ <Home/> } />
					<Route exact path="/login" component={ <Login/> } />
					<Route exact path="/password-recovery" component={ <PasswordRecovery/> } />
					<Route exact path="/send-email" component={ <SendEmail/> } />
					<Route exact path="/new-password" component={ <NewPassword/> } />
					<Route exact path="/account" component={ <MyAccount/> } />
					<Route exact path="/signup" component={ <CreateAccount/> } />
					<Route exact path="/checkout" component={ <Checkout/> } />
					<Route exact path="/orders" component={ <Orders/> } />
					<Route path="*" component={ <NotFound/> } />
			</Routes>
		</Layout>
		</BrowserRouter>		
	)
}

export default App;
