import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';

import Post from './Post';
import { Container, NavBar } from './styles';
import usePostGeneration, { generatePost } from './postGeneration';

export default function Posts() {
	const [posts, setPosts] = useState([]);
	const initialSize = 3;

	function handleRefresh() {
		setPosts((prevState) => [...prevState, generatePost(posts)]);
	}

	function handleReset() {
		setPosts(usePostGeneration(initialSize, posts));
	}

	function handleRemovePost(postId) {
		setPosts((prevState) => prevState.map((obj) => (obj.id === postId ? { ...obj, removed: true } : obj)));
	}

	useEffect(() => {
		setPosts(usePostGeneration(initialSize, posts));
	}, []);

	return (
		<>
			<NavBar as='nav'>
				<Button onClick={handleRefresh}>Update Posts</Button>
				<Button onClick={handleReset}>Reset Posts</Button>
			</NavBar>

			<Container>
				{posts.map(post => (
					<Post
						key={post.id}
						post={post}
						onRemove={handleRemovePost}
					/>
				))}
			</Container>
		</>
	);
}
