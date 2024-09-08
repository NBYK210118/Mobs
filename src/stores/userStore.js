import { create } from "zustand";
import { supabase } from "../services/supabaseClient";

const useAuthStore = create((set) => ({
  token: null,
  userId: null,
  user_metadata: null,
  refreshToken: null,

  setUserInfo: ({ token, userId }) => set({ token, userId }),
  setToken: (data) => set({ token: data }),
  setUserMetaData: (metadata) => set({ user_metadata: metadata }),
  setRefreshToken: (refreshToken) => set({ refreshToken }),
  clearTokens: () => {
    set({ token: null, refreshToken: null, userId: null, user_metadata: null });
    localStorage.removeItem(
      `sb-${process.env.REACT_APP_SUPABASE_PROJECTNAME}-auth-token`
    );
  },
}));

const syncTokenWithStore = () => {
  const { setToken, setRefreshToken, clearTokens, setUserMetaData } =
    useAuthStore.getState();

  supabase.auth.onAuthStateChange((event, session) => {
    if (session) {
      if (session.user) {
        const metadata = session.user.user_metadata;

        setUserMetaData(metadata);
      }
      if (session.access_token) {
        const accessToken = session.access_token;
        setToken(accessToken);
      }

      if (session.provider_refresh_token) {
        const providerRefreshToken = session.provider_refresh_token;
        setRefreshToken(providerRefreshToken);
      }
    }

    if (event === "SIGNED_OUT") {
      clearTokens();
      console.log("Tokens cleared in Zustand store");
    }
  });
};

export { useAuthStore, syncTokenWithStore };
