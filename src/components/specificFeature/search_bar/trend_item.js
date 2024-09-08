import { Images } from '../../common/icons';

const TrendBoard = () => {
  return (
    <div className="flex items-center mt-2 p-1 mb-[0.6rem] cursor-pointer hover:bg-gray-200">
      <div className="block">
        <img src={Images.juice1} alt="juice1" className="w-10 h-10 md:w-16 md:h-16 rounded-lg" />
      </div>
      <div className="ml-4 space-y-2">
        <span className="block text-xs md:text-base">title</span>
        <span className="block truncate md:text-xs text-[0.7rem] max-w-[3.7rem] md:max-w-60">
          Reprehenderit amet fugiat occaecat esse non consequat esse nostrud elit.
        </span>
        <span className="md:text-xs text-[0.7rem]">community or category</span>
      </div>
    </div>
  );
};

export default TrendBoard;
