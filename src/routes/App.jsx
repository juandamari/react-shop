import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../containers/layout';
import Login from '../containers/login';
import '../styles/global.css';
import RecoveryPassword from '../components/recoveryPassword';
import Home from '../pages/home';
import NotFound from '../pages/NotFound';
import CreateAcount from '../containers/CreateAcount';
import Product from '../pages/Products';
import Desktop from '../pages/Desktop-Menu';
import Mobile_Menu from '../components/Mobile-Menu';
import My_order from '../components/My-order';
import Product_detail from '../components/Product-detail';
import My_orderM from '../components/my-orderM';

const App = () => {
	return (
		<BrowserRouter>
		   <Layout>
				<switch>
				<Routes>
				   <Route exact path="/" element={ <Home /> } ></Route>
				   <Route exact path="/login" element={ <Login /> } /> {/* es la forma actual de llamar el componente */}
				   <Route exact path="/createacount" element={ <CreateAcount />} />
				   <Route exact path="/Products" element={ <Product/>} />
				   <Route exact path="/Mobile-menu" element={ <Mobile_Menu/>} />
				   <Route exact path="/My-order" element={ <My_order/>} />
				   <Route exact path="/Product-detail" element={ <Product_detail/>} />
				   <Route exact path="/Desktop-Menu" element={ <Desktop/>} />
				   <Route exact path="/My-orderM" element={ <My_orderM/>} />
				   <Route exact path="/recoveryPassword" element={ <RecoveryPassword /> } />
				   <Route path="*" element={ <NotFound /> } ></Route>				
				</Routes>
				</switch>
			</Layout>
		</BrowserRouter>		
	)
}

export default App;
