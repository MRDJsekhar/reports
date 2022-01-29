import { Button, Grid } from '@mui/material';
import React from 'react';

const Buttons = () => {
	return (
		<Grid container>
			<Grid item xs={6}>
				<Button
					style={{ borderRadius: '20px', width: '90px', marginLeft: '50%' }}
					color="success"
					size="small"
					variant="contained"
				>
					Submit
				</Button>
			</Grid>
			<Grid item xs={6}>
				<Button
					style={{ borderRadius: '20px', width: '90px', marginRight: '50%' }}
					size="small"
					color="error"
					variant="contained"
				>
					Clear
				</Button>
			</Grid>
		</Grid>
	);
};

export default Buttons;
