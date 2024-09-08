import { supabase } from "../services/supabaseClient";

const useSupabaseOAuth = () => {
  const loginKakao = async () => {
    console.log(`kakao 로그인 연동 시작`);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
    });

    if (error) {
      console.log(`kakao 로그인 연동 실패 ${error}`);
      throw new Error(`Error: ${error}`);
    }

    return;
  };

  const loginDiscord = async () => {
    console.log(`Discord 로그인 연동 시작`);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
    });

    if (error) {
      console.log(`Discord 로그인 연동 실패 ${error}`);
      throw new Error(`Error: ${error}`);
    }

    return;
  };

  const loginGoogle = async () => {
    console.log(`Google 로그인 연동 시작`);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log(`Google 로그인 연동 실패 ${error}`);
      throw new Error(`Error: ${error}`);
    }

    return;
  };
  return {
    loginKakao,
    loginDiscord,
    loginGoogle,
  };
};

export { useSupabaseOAuth };
