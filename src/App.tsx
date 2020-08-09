import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from 'container/Home';
import { Stastica } from 'container/Stastica';
import { ExchangeRate } from 'container/ExchangeRate';
import styled from 'styled-components';
import { Counter } from './features/counter/Counter';
import { initializing } from 'api';

function App() {
	initializing();

	return (
		<Wrapper>
			<Router>
				{/* <nav>
					<ul>
						<li>
							<Link to='/'>HOME</Link>
						</li>
						<li>
							<Link to='/stastica'>stastica</Link>
						</li>
						<li>
							<Link to='/ExchangeRate'>ExchangeRate</Link>
						</li>
					</ul>
				</nav> */}

				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/stastica'>
						<Stastica />
					</Route>
					<Route exact path='/ExchangeRate'>
						<ExchangeRate />
					</Route>
				</Switch>
			</Router>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: #1b1b1b;
	color: white;
`;

export default App;
