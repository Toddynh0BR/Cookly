import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

export const AuthContext = createContext({});

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState({});

    const showAlert = (title: string, message: string | undefined) => {
        Alert.alert(title, message, [{ text: "OK" }]);
    };

    async function signIn(name: string, email: string, level: string, img:string) {
        if (!name && !email) {
            showAlert("Erro", "Nome de usuário ou email devem ser informados.");
        };

        console.log(name, email, level, img)

        try {
            const User = {
            name,
            email,
            level: level || '',
            img: img || ''
         };

        setData({ user: User });
        await AsyncStorage.setItem("@cookly:user", JSON.stringify(User));
        } catch(error) {
         console.error(error)
         Alert.alert('Erro', 'Erro ao fazer login, tente novamente')
        }
    };

    async function logout() {
        await AsyncStorage.removeItem("@cookly:user");

        setData({});
    };

    useEffect(() => {
        const fetchData = async () => {
            const user = await AsyncStorage.getItem("@cookly:user");

            if (user) {
                setData({
                    user
                });
            }
        };

        fetchData();
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, logout, user: data.user }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };
