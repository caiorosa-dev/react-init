import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../components/Button';

import { Subtitle, Container, Title } from './styles';
import { useHistory } from 'react-router-dom';

export default function Post({ post, onRemove }) {
	const history = useHistory();

	function handleRedirect() {
		history.push(`/posts/${post.id}`);
	}

	return (
		<Container removed={post.removed}>
			<div>
				<Title onClick={ handleRedirect }>{post.title}</Title>
				<Subtitle>{post.subtitle}</Subtitle>
			</div>

			<Button onClick={() => onRemove(post.id)} disabled={post.removed}>
				Remove
			</Button>
		</Container>
	);
}

Post.propTypes = {
	post: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		subtitle: PropTypes.string.isRequired,
		removed: PropTypes.bool.isRequired,
	}).isRequired,
	onRemove: PropTypes.func.isRequired
}
