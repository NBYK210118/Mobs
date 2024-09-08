import { Images } from '../../common/icons';

const GameItem = ({ img = Images.juice1, gameName = 'GameName', boardsCount = '120k', selected, setSelected }) => {
  const handleClick = (gameName) => {
    setSelected(gameName);
  };
  return (
    <div
      className={`p-5 flex flex-col items-center gap-2 border-b border-gray-800 shadow-lg ${
        selected === gameName ? 'bg-black' : 'bg-gray-800'
      }  hover:bg-[#383838] cursor-pointer duration-150`}
      onClick={() => handleClick(gameName)}
    >
      <img src={img} alt="" className="w-32 h-32 rounded-full object-cover overflow-hidden" />
      <span className="font-eng text-white">{gameName}</span>
      <span className="font-eng text-sm text-slate-400">Total Board Count: {boardsCount}</span>
    </div>
  );
};
export default GameItem;
