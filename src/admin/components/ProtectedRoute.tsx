import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '../hooks/useAdminAuth';
import React from 'react';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAdminAuth();

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}
