import { supabase } from './supabaseClient';

export const uploadFile = async (file, postId) => {
  const { data, error } = await supabase.storage.from('Board').upload(`uploads/${Date.now()}_${postId}`, file);
  if (error) {
    console.log('파일 업로드 중 에러: ', error);
    return null;
  }

  return data.path;
};
