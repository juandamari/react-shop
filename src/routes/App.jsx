import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../containers/layout';
import Login from '../containers/login';
import '../styles/global.css';
import RecoveryPassword from '../components/recoveryPassword';
import Home from '../pages/home';
import NotFound from '../pages/NotFound';

const App = () => {
	return (
		<BrowserRouter>
		   <Layout>
				<switch>
				<Routes>
				   <Route exact path="/" element={ <Home /> } ></Route>
				   <Route exact path="/login" element={ <Login /> } /> {/* es la forma actual de llamar el componente */}
				   <Route exact path="/recoveryPassword" element={ <RecoveryPassword /> } />
				   <Route path="*" element={ <NotFound /> } ></Route>				
				</Routes>
				</switch>
			</Layout>
		</BrowserRouter>		
	)
}

export default App;
