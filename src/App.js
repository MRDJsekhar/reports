import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import ResponsiveAppBar from './components/Header';
import Body from './pages/Body';

const App = () => {
	return (
		<div className="App">
			<Grid container rowSpacing={3} spacing={5}>
				<Grid item xs={12} md={12}>
					<ResponsiveAppBar />
				</Grid>
				<Grid item xs={12} md={12}>
					<Body />
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
