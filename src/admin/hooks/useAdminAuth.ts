export function useAdminAuth() {
  return { isAuthenticated: true, login: (..._args: any[]) => true, logout: () => {} };
}
