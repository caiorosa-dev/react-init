import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function PostPage() {
	const { search } = useLocation();

	const queryParams = useMemo(() => new URLSearchParams(search), [search]); // Query Params tipo ?example
	const params = useParams(); // Pegar parametros (/:id)

	return (<h1>Post Page - { params.id }</h1>)
}
