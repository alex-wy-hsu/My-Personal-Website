const digitMap: Record<string, string> = {
	'0': '零',
	'1': '壹',
	'2': '貳',
	'3': '參',
	'4': '肆',
	'5': '伍',
	'6': '陸',
	'7': '柒',
	'8': '捌',
	'9': '玖',
};

const accentVarByYear: Record<number, string> = {
	2025: '--accent-2025',
	2024: '--accent-2024',
	2023: '--accent-2023',
	2022: '--accent-2022',
};

export function toChineseUpperYear(year: number): string {
	return year
		.toString()
		.split('')
		.map((digit) => digitMap[digit] ?? digit)
		.join('');
}

export function accentVar(year: number): string {
	const varName = accentVarByYear[year] ?? '--accent-2022';
	return `var(${varName})`;
}