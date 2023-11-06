import db from '$lib/database';
import { error } from 'console';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (event) => {
	const posts = await db.post.findMany({
		select: {
			title: true,
			slug: true
		},
		take: 4
	});

	if (!posts) {
		throw error(404, 'Page data not found.');
	}
	return { posts };
};
