import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
// import Admin from './components/admin/Admin';
import AddProject from './components/admin/AddProject';
import Courses from './components/Courses';
import AccessDatabase from './components/AccessDatabase';
import GraphicsDesign from './components/GraphicsDesign';
import InternetTechnologyMasterclass from './components/InternetTechnologyMasterclass';
import MySQL from './components/MySQL';
import Java from './components/Java';
import JavaScript from './components/JavaScript';
import WebDevelopment from './components/WebDevelopment';
import MongoDB from './components/MongoDB';
import SQLite from './components/SQLite';
import NodeExpressMongoDB from './components/NodeExpressMongoDB';
import DesktopPublishing from './components/DesktopPublishing';
import VBMasterClass from './components/VBMasterClass';
import VisualBasic from './components/VisualBasic';
import AppsThatSell from './components/AppsThatSell';
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
import FindStudent from './components/FindStudent';

import ScrollToTop from './components/ScrollToTop';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
	render () {
		return (
			<Provider store={store}>
				<Router onUpdate={() => window.scrollTo(0, 0)} history={this.props.history}>
					<ScrollToTop>
						<Fragment>
							<Header />
							<Route path="/" exact={true} component={Home} />
							<Route path="/courses" exact={true} component={Courses} />
							<Route path="/about" exact={true} component={About} />
							{/* <Route path="/admin" exact={true} component={Admin} /> */}
							<Route path="/store/laptops" exact={true} component={Laptops} />
							<Route path="/store/systemUnits" exact={true} component={SystemUnits} />
							<Route path="/store/tabs" exact={true} component={Tabs} />
							<Route path="/store/screens" exact={true} component={Screens} />
							<Route path="/store/printers" exact={true} component={Printers} />
							<Route path="/store/accessories" exact={true} component={Accessories} />
							<Route path="/students" exact={true} component={Students} />
							<Route path="/api/students/findStudent" exact={true} component={ApplicationForm} />
							<Route path="/students/find" exact={true} component={FindStudent} />
							<Route path="/courses/access-db-for-beginners" exact={true} component={AccessDatabase} />
							<Route path="/courses/graphics-design-mastery" exact={true} component={GraphicsDesign} />
							<Route path="/courses/internet-technology-masterclass" exact={true} component={InternetTechnologyMasterclass} />
							<Route path="/courses/learn-database-design-with-mysql" exact={true} component={MySQL} />
							<Route path="/courses/a-complete-guide-to-programming-in-java" exact={true} component={Java} />
							<Route path="/courses/learn-javascript-from-novice-to-professional" exact={true} component={JavaScript} />
							<Route path="/courses/web-development-a-beginners-guide" exact={true} component={WebDevelopment} />
							<Route path="/courses/mongodb-essentials" exact={true} component={MongoDB} />
							<Route path="/courses/sqlite-made-easy" exact={true} component={SQLite} />
							<Route path="/courses/nodejs-expressjs-mongodb-from-development-to-deployment" exact={true} component={NodeExpressMongoDB} />
							<Route path="/courses/complete-desktop-publishing-masterclass" exact={true} component={DesktopPublishing} />
							<Route path="/courses/visual-basic-dot-net-masterclass" exact={true} component={VBMasterClass} />
							<Route path="/courses/visual-basic-programming-with-windows-forms-apps" exact={true} component={VisualBasic} />
							<Route path="/courses/learn-and-make-app-that-sells-using-visual-basic" exact={true} component={AppsThatSell} />
							<Route path="/admin/AddProject" exact={true} component={AddProject} />
							<Footer />
						</Fragment>
					</ScrollToTop>
				</Router>
			</Provider>
		);
	}
}

export default App;