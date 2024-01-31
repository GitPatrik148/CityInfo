import { FC, ReactNode, createContext, useState } from "react";
interface UserContextState {
  isLoggedIn: boolean;
}
interface UserContextProps extends UserContextState {
  logIn: () => void;
  logOut: () => void;
}
const defaultValues = {
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
};
export const UserContext = createContext<UserContextProps>(defaultValues);
const UserContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [store, setStore] = useState<UserContextState>(defaultValues);
  const { isLoggedIn } = store;
  const logIn = () => {
    setStore({ ...store, isLoggedIn: true });
  };
  const logOut = () => {
    setStore({ ...store, isLoggedIn: false });
  };
  return (
    <UserContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;