// import { useSelector } from 'react-redux';

interface UserState {
  isAuth: boolean;
  email: string;
  token: string;
  id: string;
}

// interface RootState {
//   user: UserState;
// }

// export function useAuth() {
//   const { email, token, id } = useSelector((state: RootState) => state.user);
//   return {
//     isAuth: !!email,
//     email,
//     token,
//     id,
//   };
// }
export function useAuth(): UserState {
  const email = localStorage.getItem('email') || '';
  const token = localStorage.getItem('refreshToken') || '';
  const id = localStorage.getItem('uid') || '';

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
