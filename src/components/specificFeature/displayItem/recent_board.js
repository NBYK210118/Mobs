import { Images } from '../../common/icons';

const RecentBoard = () => {
  return (
    <div className="p-2 m-1 font-eng cursor-pointer hover:bg-gray-300 duration-150 ">
      <div>
        <img src={Images.juice2} alt="juice2" className="w-32 h-32 2xl:w-36 2xl:h-36" />
        <div className="space-y-1 mt-1">
          <span className="block text-blue-500 text-[0.65rem] 2xl:text-base font-bold truncate">Title</span>
          <span className="block text-[0.6rem] 2xl:text-xs text-gray-400 max-w-44 truncate">
            Ipsum consequat proident tempor enim in ullamco veniam culpa ut amet aliqua.
          </span>
          <span className="block text-[0.6rem] 2xl:text-xs text-gray-400">category</span>
          <div className="flex space-x-2 items-center">
            <span className="whitespace-nowrap text-[0.6rem] 2xl:text-xs text-blue-500">추천 10</span>
            <span className="whitespace-nowrap text-[0.6rem] 2xl:text-xs text-gray-500">2024-06-25 16:58</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBoard;
