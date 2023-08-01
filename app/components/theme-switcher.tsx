'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faBars } from '@fortawesome/free-solid-svg-icons';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [colorMode, setColorMode] = useState('light');

  const toggleColorMode = () => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className='text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span className='sr-only'>Toggle color mode</span>
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faMoon} className='h-8 w-8 text-blue' />
      ) : (
        <FontAwesomeIcon icon={faSun} className='h-8 w-8' />
      )}
    </button>
  );
};
