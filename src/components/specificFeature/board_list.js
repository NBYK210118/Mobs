import { EditIcon, TrashIcon } from '../common/icons';
import Pagination from '../common/paginiation';

const BoardList = ({ boards = [] }) => {
  return (
    <div className="border-b border-slate-500">
      <div className="grid grid-cols-6 gap-x-16 mb-1 place-items-center border-b border-slate-500 p-5">
        <span className="text-sm whitespace-nowrap font-bold">게시물 번호</span>
        <span className="text-sm whitespace-nowrap font-bold">카테고리</span>
        <span className="text-sm whitespace-nowrap font-bold">게시물 제목</span>
        <span className="text-sm whitespace-nowrap font-bold">내용</span>
        <span className="text-sm whitespace-nowrap font-bold">작성일자</span>
        <span className="text-sm whitespace-nowrap font-bold">관리</span>
      </div>
      {[...Array(8)].map((_, idx) => (
        <div
          className="p-1 grid grid-cols-6 gap-x-16 place-items-center hover:bg-gray-800 border-slate-500 border-b cursor-pointer"
          key={idx}
        >
          <span className="text-sm whitespace-nowrap font-semibold">1234</span>
          <span className="text-sm whitespace-nowrap font-semibold">게임</span>
          <span className="text-sm whitespace-nowrap font-semibold">이게 맞냐?</span>
          <span className="text-sm whitespace-nowrap font-semibold">ㅁㄴㅇㄻㄴ</span>
          <span className="text-xs text-gray-500 font-semibold">2024-06-24 10:32</span>
          <div className="flex gap-1 mr-3">
            <span className="text-2xl text-white font-semibold cursor-pointer hover:bg-gray-500 rounded-lg p-1">
              <EditIcon />
            </span>
            <span className="text-2xl">/</span>
            <span className="text-2xl text-white font-semibold cursor-pointer hover:bg-gray-500 rounded-lg p-1">
              <TrashIcon />
            </span>
          </div>
        </div>
      ))}
      <div className="flex justify-center p-2 my-2">
        <Pagination />
      </div>
    </div>
  );
};

export default BoardList;
