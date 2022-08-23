import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../containers/layout';
import Login from '../containers/login';
import '../styles/global.css';
import RecoveryPassword from '../components/recoveryPassword';
import Home from '../pages/home';

const App = () => {
	return (
		<BrowserRouter>
		<switch>
			<Layout>
				<Route exact path="/" element={ <Home></Home> }></Route>
				<Route exact path="/login" element={ <Login /> } /> {/* es la forma actual de llamar el componente */}
				<Route exact path="recoveryPassword" element={ <RecoveryPassword /> } />
				<Route element={ <NotFound></NotFound> } ></Route>
			</Layout>
		</switch>
		</BrowserRouter>		
	);
}

export default App;
