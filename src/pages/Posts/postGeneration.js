export function generatePost(posts, number) {
	if (!number) number = posts.length + 1;
	const digit = (number).toString().padStart(2, '0');

	return { id: Math.random(), title: `Title ${digit}`, subtitle: `Test ${digit}`, removed: false };
}

export default function usePostGeneration(size, posts) {
	const newPosts = [];

	for (let i = 0; i < size; i++) {
		newPosts.push(generatePost(posts, i + 1))
	}

	return newPosts;
}
