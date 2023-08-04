import { useEffect, useReducer } from 'react';
import { useLocation } from 'react-router-dom';

type Mode = 'preview' | 'edit';

export default function useMode() {
  // TODO: re-implement this hook so that it reads and writes the mode query parameter from the URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const modeQueryParam = searchParams.get('mode');

  const initialMode: Mode = modeQueryParam === 'edit' ? 'edit' : 'preview';

  const [mode, toggleMode] = useReducer(
    (currentMode: Mode) => (currentMode === 'preview' ? 'edit' : 'preview'),
    initialMode
  );

  useEffect(() => {
    // Update the mode query parameter in the URL whenever the mode changes
    const newSearchParams = new URLSearchParams(location.search);
    newSearchParams.set('mode', mode);
    // Replace the current state in the history, without adding a new entry
    window.history.replaceState({}, '', `?${newSearchParams.toString()}`);
  }, [mode, location]);

  return [mode, toggleMode] as const;
}
