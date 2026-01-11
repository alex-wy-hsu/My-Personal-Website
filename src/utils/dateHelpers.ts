/**
 * Convert year to Chinese uppercase numerals
 * Example: 2025 → "貳零貳伍"
 */
export function toChineseUpperYear(year: number): string {
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

  return String(year)
    .split('')
    .map(digit => digitMap[digit])
    .join('');
}

/**
 * Get CSS variable name for year accent color
 */
export function getYearAccentVar(year: number): string {
  return `var(--accent-${year})`;
}
