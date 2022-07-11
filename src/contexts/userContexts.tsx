import React, { createContext, useState } from "react";

export interface IUser {
  birthdate?: string;
  created_at: number;
  email?: string;
  email_verified: boolean;
  family_name?: string;
  gender?: string;
  given_name?: string;
  id: string;
  middle_name?: string;
  nickname?: string;
  phone_number?: string;
  phone_number_verified: boolean;
  picture?: null;
  preferred_username?: string;
  roles: string[];
  signup_methods?: string;
  updated_at?: number;
  access_token: string
  id_token?: string
}

const defaultUser = {
  created_at: 0,
  email_verified: false,
  id: "",
  phone_number_verified: false,
  roles: [""],
};

export interface IUserContext {
  user: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

//@ts-ignore
export const UserContext = createContext<IUserContext>();

export const UserContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<IUser | undefined>();

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {children}
    </UserContext.Provider>
  );
};
