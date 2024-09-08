import { create } from 'zustand';

const useHeaderStore = create((set) => ({
  showRecentBoard: false,
  selectedSideBar: '홈',

  setShowRecentBoard: (showRecentBoard) => {
    set({ showRecentBoard });
  },
  setSelectedSideBar: (menu) => {
    set({ selectedSideBar: menu });
  },
}));

export default useHeaderStore;
