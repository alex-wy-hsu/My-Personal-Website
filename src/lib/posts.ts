import type { CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;

export function sortPostsByDateDesc(posts: BlogEntry[]): BlogEntry[] {
	return [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function groupPostsByYear(posts: BlogEntry[]): Array<{ year: number; posts: BlogEntry[] }> {
	const buckets = new Map<number, BlogEntry[]>();
	for (const post of posts) {
		const year = post.data.date.getUTCFullYear();
		if (!buckets.has(year)) buckets.set(year, []);
		buckets.get(year)?.push(post);
	}
	return Array.from(buckets.entries())
		.sort((a, b) => b[0] - a[0])
		.map(([year, items]) => ({ year, posts: sortPostsByDateDesc(items) }));
}

export function latestYear(posts: BlogEntry[]): number | null {
	return posts.length ? sortPostsByDateDesc(posts)[0].data.date.getUTCFullYear() : null;
}