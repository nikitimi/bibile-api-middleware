import type { PageLoad } from './$types.js';

export const load: PageLoad = async ({ params, url }) => {
	// console.log(url);
	// if (params.slug === 'hello-world') {
	const response = await fetch(`${url.href}`);
	const intro = {
		title: 'Hello world!',
		params: params.slug.replace(/-/, ' ').toUpperCase(),
		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	};
	// console.log({ response });
	return intro;
	// }
	// error(404, 'Not found');
};
