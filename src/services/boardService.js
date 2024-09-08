import { supabase } from './supabaseClient';

export const getAllBoard = async ({}) => {
  const { data, error } = await supabase.from('Board').select('*').order('createdAt', { ascending: false });

  if (error) {
    console.log('게시물 로드 오류', error);
    return;
  }

  if (data) {
    console.log('게시물이 성공적으로 로드되었습니다!', data);
    return data;
  }
};

export const getSomeBoards = async ({}) => {
  const { data, error } = await supabase.from('Board').select('*').order('createdAt', { ascending: false }).limit(6);

  if (error) {
    console.log('최근 게시물 로드 오류: ', error);
    return;
  }

  if (data) {
    console.log('최근 게시물이 성공적으로 로드되었습니다!', data);
    return data;
  }
};

export const getBoardsByCategory = async ({ category }) => {
  const { data, error } = await supabase
    .from('Board')
    .select('*')
    .eq('category', category)
    .order('createdAt', { ascending: false });
  if (error) {
    console.log('게시물 로드 오류', error);
    return;
  }

  if (data) {
    console.log('게시물이 성공적으로 로드되었습니다!', data);
    return data;
  }
};

export const registerBoard = async ({ title, description, profileId }) => {
  const { data, error } = await supabase.from('Board').insert({ title, description, profileId }).select('id').single();
  if (error) {
    console.log('게시물 등록 에러', error);
    return;
  }
  if (data) {
    console.log('게시물이 성공적으로 등록되었습니다!', data);
    return data.id;
  }
};

export const temporarySaveBoard = async ({ initialTitle, initialContent, profileId }) => {
  const { data, error } = await supabase
    .from('Board')
    .insert({ title: initialTitle, description: initialContent, registrationBoard: false, profileId })
    .select();

  if (error) {
    console.log('게시물 임시저장 중 에러: ', error);
  }

  if (data) {
    console.log('게시물 성공적으로 임시저장 되었습니다! ', data);
    return data;
  }
};

export const updateFilePath = async ({ userId, boardId, filePaths }) => {
  const { data, error } = await supabase
    .from('Board')
    .update({ filePaths })
    .eq('profileId', userId)
    .eq('id', boardId)
    .select()
    .single();

  if (error) {
    console.log('파일 path 업로드 실패: ', error);
    return;
  }

  return data;
};
