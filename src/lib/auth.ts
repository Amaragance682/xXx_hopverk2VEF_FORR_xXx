export function isTokenValid(): boolean {
  if (typeof window === "undefined") return false;

  const token = localStorage.getItem("token");
  const expiry = localStorage.getItem("tokenExpiry");

  return !!token && !!expiry && Date.now() < Number(expiry);
}

export function isTokenAdmin(): boolean {
  if (typeof window === "undefined") return false;

  const user = localStorage.getItem("user");
  if (user) {
    try {
      const parsedUser = JSON.parse(user);
      if (parsedUser.admin) {
        return true;
      }
      return false;
    } catch (error) {
      console.error("Failed to parse user data:", error);
      return false;
    }
  }

  return false;
}
