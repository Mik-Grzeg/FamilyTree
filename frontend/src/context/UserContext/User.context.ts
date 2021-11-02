import { createContext } from "react";

const UserContextDataModel = {
  username: "",
  isLoggedIn: false,
};

export type UserContextDataType = typeof UserContextDataModel;

const UserContext = createContext({
  ...UserContextDataModel,
  isPending: false,
  changeUserContextValue: (_: {
    [P in keyof UserContextDataType]?: UserContextDataType[P];
  }) => {},
});

export default UserContext;
