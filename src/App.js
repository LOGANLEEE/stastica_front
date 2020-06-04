import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from 'container/Home';
import Stastica from 'container/Stastica';
import ExchangeRate from 'container/ExchangeRate';

import styled from 'styled-components';

function App() {
	return (
		<Wrapper>
			<Router>
				<div>
					<nav>
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
					</nav>

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
				</div>
			</Router>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	background-color: black;
	color: white;
`;

export default App;
