// useThemeDetector.ts
import { useState, useEffect } from 'react';

type ColorScheme = 'dark' | 'light';

// La media query que detecta la preferencia de modo oscuro
const darkModeQuery = '(prefers-color-scheme: dark)';

export function useThemeDetector() {
    // Función para obtener el estado inicial basado en la media query
    const getInitialTheme = (): ColorScheme => {
        if (typeof window === 'undefined') {
            return 'light'; // Por defecto en el lado del servidor (SSR)
        }
        return window.matchMedia(darkModeQuery).matches ? 'dark' : 'light';
    };

    const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia(darkModeQuery);

        // Handler que se ejecuta cuando cambia la preferencia del sistema
        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkTheme(e.matches ? 'dark' : 'light');
        };

        // Añadir el listener
        mediaQuery.addEventListener('change', handleChange);

        // Función de limpieza
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return isDarkTheme;
}