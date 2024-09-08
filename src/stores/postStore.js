import { create } from 'zustand';

const usePostStore = create((set, get) => ({
  boards: [],
  setBoards: (boards) => set({ boards }),
  addBoard: (board) => set((state) => ({ posts: [...state.boards, board] })),
  updateBoard: (id, updates) =>
    set((state) => ({
      boards: state.boards.map((post) => (post.id === id ? { ...board, ...updates } : board)),
    })),
  deleteBoard: (id) =>
    set((state) => ({
      boards: state.boards.filter((board) => board.id !== id),
    })),
}));

export default usePostStore;
