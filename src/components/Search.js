import React, { useState } from 'react';
import VotesTable from './VotesTable';
import {
	Button,
	ButtonGroup,
	Grid,
	Input,
	List,
	ListItem,
	Typography,
} from '@material-ui/core/';

import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

import MovieDetails from './MovieDetails';
import API from '../utils/API';

const Search = () => {
	let [movies, setMovies] = useState([]);
	let [search, setSearch] = useState('');
	let [details, setDetails] = useState({});

	const handleInputChange = (event) => {
		const value = event.target.value;
		setSearch(value);
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		getMovies(search);
	};

	const handleDetailsSubmit = (event) => {
		event.preventDefault();
		getDetails(event.currentTarget.value);
	};

	const getMovies = (query) => {
		API.search(query)
			.then((response) => {
				setMovies(response.data.Search);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getDetails = (query) => {
		API.getDetails(query)
			.then((response) => {
				setDetails(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const thumbsUp = (event) => {
		event.preventDefault();
		const title = event.currentTarget.value;
		if (localStorage.getItem(title) === null) {
			localStorage.setItem(title, JSON.stringify({ up: 1, down: 0 }));
		} else {
			let movieVotes = JSON.parse(localStorage.getItem(title));
			movieVotes.up++;
			let thumbedUpMovie = JSON.stringify(movieVotes);
			localStorage.setItem(title, thumbedUpMovie);
		}
	};

	const thumbsDown = (event) => {
		event.preventDefault();
		const title = event.currentTarget.value;
		if (localStorage.getItem(title) === null) {
			localStorage.setItem(title, JSON.stringify({ up: 0, down: 1 }));
		} else {
			let movieVotes = JSON.parse(localStorage.getItem(title));
			movieVotes.down++;
			let thumbedDownMovie = JSON.stringify(movieVotes);
			localStorage.setItem(title, thumbedDownMovie);
		}
	};

	let votesArr = [];
	let title;
	let votes;

	for (let i = 0; i < localStorage.length; i++) {
		title = localStorage.key(i);
		votes = JSON.parse(localStorage.getItem(localStorage.key(i)));
		votesArr.push([title, votes]);
	}
	
	votesArr = votesArr.filter((movie) => movie[1].hasOwnProperty('up') && movie[1].hasOwnProperty('down'));

	const movieTitles = movies.map(({ Title }, index) => (
		<ListItem style={{ display: 'block', marginTop: '10px' }} key={index}>
			<Typography variant='body1'>{Title}</Typography>
			<ButtonGroup
				size='small'
				color='primary'
				aria-label='read more & thumbs up or down actions'
			>
				<Button value={Title} onClick={handleDetailsSubmit}>
					Read More
				</Button>
				<Button value={Title} onClick={thumbsUp}>
					<ThumbUpOutlinedIcon />
				</Button>
				<Button value={Title} onClick={thumbsDown}>
					<ThumbDownOutlinedIcon />
				</Button>
			</ButtonGroup>
		</ListItem>
	));

	return (
		<Grid container>
			<Grid item xs={4}>
				<Input
					color='primary'
					onChange={handleInputChange}
					type='text'
					value={search}
					placeholder='Search for a movie!'
				/>
				<Button
					style={{ marginLeft: '10px' }}
					onClick={handleFormSubmit}
					variant='contained'
					color='primary'
				>
					Search
				</Button>

				<List>{movieTitles}</List>
			</Grid>
			<Grid item xs={4}>
				{details !== {} ? <MovieDetails details={details} /> : null}
			</Grid>

			<Grid item xs={4}>
				<VotesTable voteInfo={votesArr} />
			</Grid>
		</Grid>
	);
};

export default Search;
