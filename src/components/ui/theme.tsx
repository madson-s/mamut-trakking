'use client';

import { useTheme } from './theme-provider';

export type ThemeToggleSize = 'sm' | 'md' | 'lg';

interface ThemeToggleProps {
  variant?: 'switch' | 'compact';
  size?: ThemeToggleSize;
  className?: string;
}

const sizeClasses: Record<ThemeToggleSize, { button: string; icon: string }> = {
  sm: { button: 'size-7 sm:size-8', icon: 'size-3.5 sm:size-4' },
  md: { button: 'size-9', icon: 'size-[18px]' },
  lg: { button: 'size-10', icon: 'size-5' },
};

const OPTIONS = [
  { value: 'system', label: 'Usar tema do sistema', Icon: MonitorIcon },
  { value: 'light', label: 'Ativar tema claro', Icon: SunIcon },
  { value: 'dark', label: 'Ativar tema escuro', Icon: MoonIcon },
] as const;

export function Theme({ variant = 'switch', size = 'sm', className = '' }: ThemeToggleProps) {
  const { preference, theme, setTheme } = useTheme();

  if (variant === 'compact') {
    const isDark = theme === 'dark';

    return (
      <button
        type="button"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
        className={`group relative inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-700 shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-inset ring-gray-300 transition-[background-color,color,box-shadow,scale] duration-200 ease-out hover:bg-gray-200 hover:text-gray-950 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 ${className}`}
      >
        <span
          className={`absolute flex size-[18px] items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(.2,0,0,1)] ${
            isDark ? 'scale-100 opacity-100 blur-0' : 'scale-[0.25] opacity-0 blur-[4px]'
          }`}
        >
          <MoonIcon className="size-[18px]" />
        </span>
        <span
          className={`flex size-[18px] items-center justify-center transition-[opacity,filter,scale] duration-300 ease-[cubic-bezier(.2,0,0,1)] ${
            isDark ? 'scale-[0.25] opacity-0 blur-[4px]' : 'scale-100 opacity-100 blur-0'
          }`}
        >
          <SunIcon className="size-[18px]" />
        </span>
      </button>
    );
  }

  if (variant !== 'switch') return null;

  const classes = sizeClasses[size];

  return (
    <div
      role="group"
      aria-label="Selecionar tema"
      className={`inline-flex shrink-0 items-center rounded-full bg-gray-100 p-1 shadow-[0_1px_2px_rgba(0,0,0,0.08)] ring-1 ring-inset ring-gray-300 ${className}`}
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const isActive = preference === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-label={label}
            aria-pressed={isActive}
            className={`inline-flex items-center justify-center rounded-full transition-[background-color,color,box-shadow,scale] duration-200 ease-out active:scale-[0.96] focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 ${classes.button} ${isActive ? 'bg-gray-300 text-gray-950 shadow-[0_1px_2px_rgba(0,0,0,0.18)] ring-1 ring-inset ring-gray-400' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-950'}`}
          >
            <Icon className={classes.icon} />
          </button>
        );
      })}
    </div>
  );
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <rect x="3" y="4.5" width="18" height="12.5" rx="1.8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 20h7M12 17v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <circle cx="12" cy="12" r="3.25" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.28 5.28l1.42 1.42M17.3 17.3l1.42 1.42M18.72 5.28L17.3 6.7M6.7 17.3l-1.42 1.42" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={className}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
