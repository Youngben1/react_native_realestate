import { createContext, ReactNode, useContext } from "react";
import { useAppwrite } from "./useAppwrite";
import { Redirect } from "expo-router";
import {getCurrentUser} from "./appwrite";

interface User {
    email: string;
    avatar: string
}

interface GlobalContextType {
    isLoggedIn: boolean;
    user: User | null;
    loading: boolean;
    refetch: (newParams?: Record<string, string | number>) => Promise<void>;
}



const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({children}: {children: ReactNode}) => {
    const {data:user,  loading, refetch} = useAppwrite({fn, params, skip}: {
        fn: getCurrentUser,
    });

    const isLoggedIn = !!user;

    return (
        <GlobalContext.Provider value={{ isLoggedIn, user, loading, refetch }}>
            {children}
        </GlobalContext.Provider>
    )
}