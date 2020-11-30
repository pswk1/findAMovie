import React from 'react';
import { Table, TableHead, TableRow, TableCell } from '@material-ui/core';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';

const VotesTable = ({ voteInfo }) => {
	return (
		<Table>
			<TableHead>
				<TableCell>Title</TableCell>
				<TableCell>
					<ThumbUpOutlinedIcon color='primary' />
				</TableCell>
				<TableCell>
					<ThumbDownOutlinedIcon color='primary' />
				</TableCell>
			</TableHead>
			{voteInfo.length > 0 &&
				voteInfo.map((movie) => (
					<TableRow>
						<TableCell>{movie[0]}</TableCell>
						<TableCell>{movie[1].up}</TableCell>
						<TableCell>{movie[1].down}</TableCell>
					</TableRow>
				))}
		</Table>
	);
};

export default VotesTable;
