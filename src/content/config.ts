import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	type: 'content', // 支持 .md 和 .mdx 文件
	schema: z.object({
		title: z.string(),
		published: z.date(),
		updated: z.date().optional(),
		draft: z.boolean().optional().default(false),
		description: z.string().optional().default(""),
		image: z.string().optional().default(""),
		tags: z.array(z.string()).optional().default([]),
		category: z.string().optional().nullable().default(""),
		lang: z.string().optional().default("zh-cn"), // 设置中文默认值

		/* For internal use */
		prevTitle: z.string().default(""),
		prevSlug: z.string().default(""),
		nextTitle: z.string().default(""),
		nextSlug: z.string().default(""),
	}),
});
export const collections = {
	posts: postsCollection, // 支持 .md 和 .mdx 文件
};
