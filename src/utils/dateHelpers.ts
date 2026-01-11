/**
 * Convert year number to Traditional Chinese uppercase numerals
 * e.g., 2025 -> "貳零貳伍"
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

  return year
    .toString()
    .split('')
    .map(digit => digitMap[digit])
    .join('');
}
