export type TerminalDataItem = 
  | { type: 'prompt'; key: string }
  | { type: 'string'; value: string }
  | { type: 'array'; value: string[] }
  | { type: 'link'; value: { text: string; href: string } }
  | { type: 'blank' };

export const aboutData: TerminalDataItem[] = [
  { type: 'prompt', key: 'Justin.location' },
  { type: 'string', value: 'San Jose, CA' },
  { type: 'blank' },
  
  { type: 'prompt', key: 'Justin.contact' },
  { type: 'array', value: ['j.chi2241@gmail.com', 'LinkedIn', 'github'] },
  { type: 'blank' },
  
  { type: 'prompt', key: 'Justin.resume' },
  { type: 'link', value: { text: 'justinchi.pdf', href: '#' } },
  { type: 'blank' },
  
  { type: 'prompt', key: 'Justin.interests' },
  { type: 'array', value: ['design', 'basketball', 'cooking', 'traveling'] },
  { type: 'blank' },
  
  { type: 'prompt', key: 'Justin.education' },
  { type: 'string', value: 'B.Sc. Structural Engineering - University of California, San Diego' },
  { type: 'blank' },
  
  { type: 'prompt', key: 'Justin.languages' },
  { type: 'array', value: ['Typescript', 'React', 'Go', 'Python'] },
];
