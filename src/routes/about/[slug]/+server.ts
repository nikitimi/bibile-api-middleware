import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';

export const GET: RequestHandler = async ({ url, setHeaders, request }) => {
	const search = url.searchParams.get('search') || '';
	console.log({ request });
	setHeaders({
		'cache-control': 'max-age=60'
	});

	return json(search);
};
