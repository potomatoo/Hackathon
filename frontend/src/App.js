import React from 'react';
import { Route } from 'react-router-dom';

import { Home, Main, WorldCup, Winner, Listing } from './pages';

export default function App() {
	return (
		<>
			<Route component={Home} path={'/Home'} exact />
			<Route component={WorldCup} path={'/worldcup'} exact />
			<Route component={Winner} path={'/winner/:id'} exact />
			<Route component={Listing} path={'/listing/:id'} exact />

			<Route component={Main} path={'/'} exact />
		</>
	);
}
