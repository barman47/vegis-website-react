import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import Courses from './components/Courses';
import About from './components/About';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Laptops from './components/Laptops';
import SystemUnits from './components/SystemUnits';
import Tabs from './components/Tabs';
import Screens from './components/Screens';
import Printers from './components/Printers';
import Accessories from './components/Accessories';
import Students from './components/Students';
import ApplicationForm from './components/ApplicationForm';

import { Provider } from 'react-redux';
import store from './store';
import FindStudent from './components/FindStudent';

class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<Router>
					<Fragment>
						<Header />
						<Route path="/" exact={true} component={Home} />
						<Route path="/courses" exact={true} component={Courses} />
						<Route path="/about" exact={true} component={About} />
            			<Route path="/store/laptops" exact={true} component={Laptops} />
            			<Route path="/store/systemUnits" exact={true} component={SystemUnits} />
            			<Route path="/store/tabs" exact={true} component={Tabs} />
            			<Route path="/store/screens" exact={true} component={Screens} />
            			<Route path="/store/printers" exact={true} component={Printers} />
            			<Route path="/store/accessories" exact={true} component={Accessories} />
						<Route path="/students" exact={true} component={Students} />
						<Route path="/api/students/findStudent" exact={true} component={ApplicationForm} />
						<Route path="/students/find" exact={true} component={FindStudent} />
						<Footer />
					</Fragment>
				</Router>
			</Provider>
		);
	}
}

export default App;
