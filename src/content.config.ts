import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const talks = defineCollection({
	loader: file("src/data/talks.json"),
	schema: z.object({
		venue: z.string(),
		location: z.string(),
		title: z.string(),
		date: z.string().date(),
		link: z.object({
			url: z.string().url(),
			type: z.enum(["website", "youtube"]),
		}).optional(),
	}),
});

export const collections = { talks };