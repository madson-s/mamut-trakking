'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from 'react';

type ThemeName = 'light' | 'dark';
export type ThemePreference = ThemeName | 'system';

interface ThemeContextValue {
  theme: ThemeName;
  preference: ThemePreference;
  setTheme: (theme: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);
const themeListeners = new Set<() => void>();

function readStoredTheme(): ThemePreference {
  if (typeof window === 'undefined') return 'dark';
  const storedTheme = window.localStorage.getItem('mamut-theme');
  return storedTheme === 'light' || storedTheme === 'system' ? storedTheme : 'dark';
}

function resolveTheme(preference: ThemePreference): ThemeName {
  if (preference !== 'system' || typeof window === 'undefined') return preference === 'light' ? 'light' : 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function subscribeToTheme(listener: () => void) {
  themeListeners.add(listener);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === 'mamut-theme') listener();
  };
  const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');

  window.addEventListener('storage', handleStorage);
  colorScheme.addEventListener('change', listener);

  return () => {
    themeListeners.delete(listener);
    window.removeEventListener('storage', handleStorage);
    colorScheme.removeEventListener('change', listener);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const preference = useSyncExternalStore<ThemePreference>(subscribeToTheme, readStoredTheme, () => 'dark');
  const theme = resolveTheme(preference);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const setTheme = useCallback((nextPreference: ThemePreference) => {
    const nextTheme = resolveTheme(nextPreference);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem('mamut-theme', nextPreference);
    themeListeners.forEach((listener) => listener());
  }, []);

  const value = useMemo(() => ({ theme, preference, setTheme }), [theme, preference, setTheme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme deve ser usado dentro de ThemeProvider.');
  }

  return context;
}
