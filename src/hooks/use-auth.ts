import { useEffect, useState } from 'react';
import { auth } from '../firebase';

export function useAuth() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Проверяем сохраненное состояние аутентификации в localStorage
    const storedAuth = localStorage.getItem('isAuth');
    if (storedAuth) {
      setIsAuth(true);
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
        // Сохраняем состояние аутентификации в localStorage
        localStorage.setItem('isAuth', 'true');
      } else {
        setIsAuth(false);
        // Удаляем сохраненное состояние аутентификации из localStorage
        localStorage.removeItem('isAuth');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    isAuth,
  };
}
