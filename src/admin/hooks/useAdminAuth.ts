import { useState, useCallback } from 'react';

const AUTH_KEY = 'admin_auth';

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const login = useCallback((email: string, password: string): boolean => {
    try {
      const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD;
      const correctEmail = 'admin@yahoo.com';
      
      if (email === correctEmail && password === correctPassword) {
        localStorage.setItem(AUTH_KEY, 'true');
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }, []);

  const logout = useCallback(() => {
    try {
      localStorage.removeItem(AUTH_KEY);
      setIsAuthenticated(false);
      window.location.href = '/admin/login';
    } catch {
      // silent fail
    }
  }, []);

  return { isAuthenticated, login, logout };
}
