const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  // 파일 크기 단위를 'Bytes', 'KB', 'MB', 'GB'로 제한
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];

  // 파일 크기에 따라 해당되는 단위를 계산
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), sizes.length - 1);

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export default formatBytes;
