import { createContext, useState } from "react";
export const UserContext = createContext();
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); //{} , 0  , "" , false => falsies

  // const [user, setUser] = useState({
  //   email: "test@desafiolatam.com",
  //   displayName: "Desafío Latam",
  // });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
