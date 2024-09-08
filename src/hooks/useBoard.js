import { useEffect, useState } from 'react';
import { getAllBoard } from '../services/boardService';

const useBoard = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchBoard = async () => {
      const result = await getAllBoard();
      setBoards(result);
    };
    fetchBoard();
  }, []);

  return boards;
};

export default useBoard;
