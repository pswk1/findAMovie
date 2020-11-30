import React from 'react';
import Typography from '@material-ui/core/Typography';

const MovieDetails = (props) => {
	const {
		details: { Title, Year, Director, Plot, Actors },
	} = props;
	
	return (
		<div >
            <Typography variant='h3'>{Title}</Typography>
			<Typography paragraph >Released: {Year}</Typography>
			<Typography paragraph >Director: {Director}</Typography>
			<Typography paragraph >Cast: {Actors}</Typography>
			<Typography variant='body1' >Description: {Plot}</Typography>
		</div>
	);
};

export default MovieDetails;
