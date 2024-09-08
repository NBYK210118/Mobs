import { useEffect } from "react";
import { useAuthStore } from "../stores/userStore";

const useUserState = () => {
  const {
    token,
    userId,
    refreshToken,
    setUserInfo,
    setToken,
    setRefreshToken,
    clearTokens,
  } = useAuthStore((state) => state);

  useEffect(() => {
    if (!token) {
      const localStorageTokenValue = localStorage.getItem(
        `sb-${process.env.REACT_APP_SUPABASE_PROJECTNAME}-auth-token`
      );
      if (localStorageTokenValue) setToken(localStorageTokenValue);
    }
  }, []);

  return {
    token,
    userId,
    refreshToken,
    setUserInfo,
    setToken,
    setRefreshToken,
    clearTokens,
  };
};

export default useUserState;
