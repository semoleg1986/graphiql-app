import { useEffect, useState } from 'react';
import { auth } from '../firebase';

export function useAuth() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
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
