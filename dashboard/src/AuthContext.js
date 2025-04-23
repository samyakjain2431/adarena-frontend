import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthLoading, setIsAuthLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                await axios.get("http://localhost:5000/api/client-auth/me", {
                    withCredentials: true,
                });
                setIsAuthenticated(true);
            } catch (err) {
                setIsAuthenticated(false);
            } finally {
                setIsAuthLoading(false);
            }
        };

        checkAuth();
    }, []);

    const logout = async () => {
        try {
            await axios.post(
                "http://localhost:5000/api/client-auth/logout",
                {},
                {
                    withCredentials: true,
                }
            );
            setIsAuthenticated(false);
        } catch (err) {
            console.error("Logout failed:", err);
        }
    };

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, setIsAuthenticated, isAuthLoading, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
