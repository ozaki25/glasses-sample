import { createContext, useContext, useState } from 'react';

export const AuthUserContext = createContext(null);

export function useAuthUser() {
  const { authUser, setAuthUser } = useContext(AuthUserContext);
  return { authUser, setAuthUser };
}

function AuthUserProvider(props) {
  const [authUser, setAuthUser] = useState(null);
  return (
    <AuthUserContext.Provider value={{ authUser, setAuthUser }} {...props} />
  );
}

export default AuthUserProvider;
