import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/Home';

function App() {
  return (
    <Router>
		<main className={'main'}>
			<Switch>
				<Route component={Home} exact path="/" />
				{/* <Route component={GenerationDetails} path="/generation/:id"/> */}
			</Switch>
		</main>
	</Router>
  );
}

export default App;
