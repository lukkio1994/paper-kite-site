'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingSpinner from './LoadingSpinner';

interface User {
  id: string;
  email?: string;
  name?: string;
  role?: string;
}

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string | string[];
  redirectTo?: string;
  fallback?: React.ReactNode;
  allowedRoles?: string[];
  isAuthenticated?: boolean;
  user?: User | null;
  checkAuth?: () => Promise<{ isAuthenticated: boolean; user?: User | null }>;
  onUnauthorized?: (reason: 'unauthenticated' | 'insufficient_role') => void;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
  redirectTo = '/login',
  fallback,
  allowedRoles,
  isAuthenticated,
  user,
  checkAuth,
  onUnauthorized,
}) => {
  const [loading, setLoading] = useState(true);
  const [authState, setAuthState] = useState<{
    isAuthenticated: boolean;
    user?: User | null;
  }>({
    isAuthenticated: isAuthenticated ?? false,
    user: user ?? null,
  });
  const router = useRouter();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        if (checkAuth) {
          const result = await checkAuth();
          setAuthState(result);
        } else {
          setAuthState({
            isAuthenticated: isAuthenticated ?? false,
            user: user ?? null,
          });
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setAuthState({ isAuthenticated: false, user: null });
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [checkAuth, isAuthenticated, user]);

  useEffect(() => {
    if (!loading && !authState.isAuthenticated) {
      onUnauthorized?.('unauthenticated');
      router.push(redirectTo);
      return;
    }

    if (!loading && authState.isAuthenticated && authState.user) {
      const userRole = authState.user.role;
      
      // Check required role
      if (requiredRole) {
        const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
        if (userRole && !roles.includes(userRole)) {
          onUnauthorized?.('insufficient_role');
          router.push('/unauthorized');
          return;
        }
      }

      // Check allowed roles
      if (allowedRoles && allowedRoles.length > 0) {
        if (!userRole || !allowedRoles.includes(userRole)) {
          onUnauthorized?.('insufficient_role');
          router.push('/unauthorized');
          return;
        }
      }
    }
  }, [
    loading,
    authState.isAuthenticated,
    authState.user,
    requiredRole,
    allowedRoles,
    redirectTo,
    router,
    onUnauthorized,
  ]);

  if (loading) {
    return (
      fallback || (
        <div className="flex min-h-screen items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      )
    );
  }

  if (!authState.isAuthenticated) {
    return null; // Will redirect
  }

  if (authState.user && (requiredRole || allowedRoles)) {
    const userRole = authState.user.role;
    
    if (requiredRole) {
      const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
      if (userRole && !roles.includes(userRole)) {
        return null; // Will redirect
      }
    }

    if (allowedRoles && allowedRoles.length > 0) {
      if (!userRole || !allowedRoles.includes(userRole)) {
        return null; // Will redirect
      }
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
export type { ProtectedRouteProps, User };
