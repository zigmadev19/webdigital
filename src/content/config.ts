import { z, defineCollection } from 'astro:content';

export const collections = {
    'posts': defineCollection({
        type: 'content',
        schema: ({ image }) => z.object({
            title: z.string(),
            description: z.string(),
            publishDate: z.date(),
            categories: z.array(z.string()),
            cover: image(),
            author: z.object({
                name: z.string(),
                img: image()
            })
        }),
    }),
    'services': defineCollection({
        type: 'data',
        schema: ({ image }) => z.object({
            category: z.string(),
            imgCategory: image(),
            title: z.string(),
            img: image(),
            decs: z.string(),
            services: z.array(z.string()),
        })
    }),
    'projects': defineCollection({
        type: 'data',
        schema: ({ image }) => z.object({
            title: z.string(),
            subTitle: z.string(),
            img: image(),
        })
    }),
};
