import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const talks = defineCollection({
	loader: file("src/data/talks.json"),
	schema: z.object({
		venue: z.string(),
		location: z.string(),
		title: z.string().optional(),
		sessionID: z.number().optional(),
		date: z.string().date(),
		link: z.object({
			url: z.string().url(),
			type: z.enum(["website", "youtube"]),
		}).optional(),
	}),
});

const sessions = defineCollection({
	loader: file("src/data/sessions.json"),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		sessionID: z.number(),
	}),
});

export const collections = { talks, sessions };