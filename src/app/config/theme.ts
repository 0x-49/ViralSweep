export type Theme = 'dark' | 'light' | 'system'

export const themes: { value: Theme; label: string; }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' }
]
