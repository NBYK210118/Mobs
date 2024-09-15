import { supabase } from "../services/supabaseClient";

const useSupabaseOAuth = () => {

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (data?.session) {
      console.log("User session:", data.session);
      localStorage.setItem("access_token", data.session.access_token);
    } else {
      console.error("No session found", error);
    }
  };

  const loginKakao = async () => {
    console.log(`kakao 로그인 연동 시작`);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
    });
    
    if (error) {
      console.log(`kakao 로그인 연동 실패 ${error}`);
      throw new Error(`Error: ${error}`);
    }
    if(data){
      console.log('Success to login Kakao : ', data)
      return data;
    }
  
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
    if(data){
      console.log('Success to login Discord : ', data);
      return data;
    }
    
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

    if(data){
      console.log('Success to login Google : ', data);
      return data;
    }
  };
  return {
    loginKakao,
    loginDiscord,
    loginGoogle,
    getSession
  };
};

export { useSupabaseOAuth };
