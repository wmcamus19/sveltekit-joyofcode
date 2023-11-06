// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import { slugify } from '../src/lib/index';
import data from './externalData.json';

const prisma = new PrismaClient();

async function main() {
	console.log(`Start seeding ...`);
	for (const poster of data.posts) {
		const user = await prisma.post.create({
			data: {
				title: poster.title,
				content: poster.body,
				slug: slugify(poster.title)
			}
		});
		console.log(`Created user with id: ${user.id}`);
	}
	console.log(`Seeding finished.`);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
