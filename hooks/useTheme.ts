
import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (!isClient) return;

    const localTheme = window.localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setTheme('dark'); // Default to dark mode
    }
  }, []);

  useEffect(() => {
    const isClient = typeof window !== 'undefined';
    if (!isClient) return;

    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
};
