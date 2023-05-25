import { useCallback, useEffect, useState } from 'react';

export const useActiveSelect = (selectName: string) => {
  const [activeSelectName, setActiveSelectName] = useState('');

  const onClickOutside = useCallback(
    (e: MouseEvent) => {
      const target = e?.target as Element;
      if (target.id !== selectName) {
        setActiveSelectName('');
      }
    },
    [selectName]
  );

  useEffect(() => {
    document.addEventListener('click', onClickOutside);
    return () => {
      document.removeEventListener('click', onClickOutside);
    };
  }, [onClickOutside]);

  const openCloseOptions = useCallback(() => {
    setActiveSelectName(activeSelectName ? '' : selectName);
  }, [activeSelectName, selectName, setActiveSelectName]);

  return { activeSelectName, openCloseOptions, setActiveSelectName };
};
