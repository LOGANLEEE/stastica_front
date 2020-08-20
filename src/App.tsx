import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Home } from 'container/Home';
import { Ranking } from 'container/Ranking';
import { ExchangeRate } from 'container/ExchangeRate';
import styled from 'styled-components';
import { Counter } from './features/counter/Counter';
import { initializing } from 'api';
import { router } from 'router';

const { exchangeRate, home: hone, ranking, bigData, news } = router;

function App() {
	initializing();

	return (
		<Wrapper>
			<Router>
				{/* <nav>
					<ul>
						<li>
							<Link to={hone}>HOME</Link>
						</li>
						<li>
							<Link to={ranking}>ranking</Link>
						</li>
						<li>
							<Link to={exchangeRate}>ExchangeRate</Link>
						</li>
					</ul>
				</nav> */}

				<Switch>
					<Route exact path={hone}>
						<Home />
					</Route>
					<Route exact path={ranking}>
						<Ranking />
					</Route>
					<Route exact path={exchangeRate}>
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
