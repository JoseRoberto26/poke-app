import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/Home';
import { GenerationDetails } from './pages/GenerationDetails';
import Background from './assets/background-2.png';

function App() {
  return (
    <Router>
		<main className={'foreground'}>
			<img className={'backgroundImage'} src={Background}/>
			<Switch>
				<Route component={Home} exact path="/" />
				<Route component={GenerationDetails} path="/generation/:id"/>
			</Switch>
		</main>
	</Router>
  );
}

export default App;
