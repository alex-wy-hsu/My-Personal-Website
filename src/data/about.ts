export type AboutBlock =
	| { type: 'string'; prompt: string; value: string }
	| { type: 'array'; prompt: string; value: string[] }
	| { type: 'link'; prompt: string; value: string; href: string };

export const aboutBlocks: AboutBlock[] = [
	{ type: 'string', prompt: 'Justin.location', value: 'San Jose, CA' },
	{ type: 'array', prompt: 'Justin.contact', value: ['j.chi2241@gmail.com', 'LinkedIn', 'github'] },
	{ type: 'link', prompt: 'Justin.resume', value: 'justinchi.pdf', href: '#' },
	{ type: 'array', prompt: 'Justin.interests', value: ['design', 'basketball', 'cooking', 'traveling'] },
	{ type: 'string', prompt: 'Justin.education', value: 'B.Sc. Structural Engineering - University of California, San Diego' },
	{ type: 'array', prompt: 'Justin.languages', value: ['Typescript', 'React', 'Go', 'Python'] },
];