import './App.css';
import Search from './components/Search';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
    // background: 'red',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		padding: '20px'
	},
	mainHeader: {
		marginBottom: '0.5em',
	}
});

function App() {
	const classes = useStyles();
	return (
		<Grid className={classes.root}>
			<Typography className={classes.mainHeader} variant='h1'>Find a Movie!</Typography>
			<Search/>
		</Grid>
	);
}

export default App;
