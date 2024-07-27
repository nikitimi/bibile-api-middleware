import { env } from '$env/dynamic/private';
import type { PageServerLoad } from './$types.js';

export const load: PageServerLoad = async () => {
	const bibleId = 'de4e12af7f28f599-01';
	const response = await fetch(`https://api.scripture.api.bible/v1/bibles/${bibleId}`, {
		headers: {
			'api-key': env.API_BIBLE_REST_API_KEY
		}
	});
	const parsed = await response.json();
	return parsed;
};
