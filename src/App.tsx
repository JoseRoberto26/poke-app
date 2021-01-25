import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
			{/* <main className={style.main}>
				<Switch>
					<Route component={Home} exact path="/" />
					<Route component={GenerationDetails} path="/generation/:id"/>
				</Switch>
			</main> */}
		</Router>
  );
}

export default App;
