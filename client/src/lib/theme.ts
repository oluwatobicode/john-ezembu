export type Theme = 'light' | 'dark' | 'system';

export const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') return 'system';
  const stored = localStorage.getItem('theme') as Theme;
  return stored || 'system';
};

export const setStoredTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('theme', theme);
};

export const applyTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  
  const root = window.document.documentElement;
  const systemTheme = getSystemTheme();
  const effectiveTheme = theme === 'system' ? systemTheme : theme;
  
  root.classList.toggle('dark', effectiveTheme === 'dark');
  root.style.colorScheme = effectiveTheme;
};
