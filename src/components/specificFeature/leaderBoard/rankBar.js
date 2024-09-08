import { Images } from '../../common/icons';

const RankBar = ({ user, onClick }) => {
  return (
    <div
      className={`relative p-5 grid grid-cols-5 items-center  ${
        user.rank % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'
      } hover:bg-[#383838] cursor-pointer`}
      onClick={onClick}
    >
      <div className={`col-span-1 ml-10`}>
        <span className="font-eng text-3xl ">{user.rank}</span>
        <span className="font-eng text-xs">위</span>
      </div>
      {user.rank === 1 && (
        <img
          src={require('../../../assets/images/diamond_medal.webp')}
          alt=""
          className="absolute w-full h-[7rem] opacity-25 object-cover"
        />
      )}
      {user.rank === 2 && (
        <img
          src={require('../../../assets/images/platinum_medal.webp')}
          alt=""
          className="absolute w-full h-[7rem] opacity-25 object-cover"
        />
      )}
      {user.rank === 3 && (
        <img
          src={require('../../../assets/images/gold_medal.webp')}
          alt=""
          className="absolute w-full h-[7rem] opacity-25 object-cover"
        />
      )}

      <div className="absolute right-10 opacity-100 col-span-1">
        <img
          src={Images.juice2}
          alt=""
          className={`w-24 h-24 border-[5px] rounded-full ${
            user.rank === 1 ? 'shadow-lg shadow-red-500 border-red-500' : ''
          } ${user.rank === 2 ? 'shadow-lg shadow-blue-500 border-blue-500' : ''} ${
            user.rank === 3 ? 'shadow-lg shadow-yellow-500 border-yellow-500' : ''
          }`}
          style={{ borderColor: user.borderColor }}
        />
      </div>
      <div className="col-span-3 grid grid-cols-3 ml-5">
        <div className="col-start-1 col-end-4">
          <h1 className="font-eng text-xl">{user.username}</h1>
        </div>

        <span className="font-eng text-slate-300">Total Point</span>

        <span className="font-eng text-slate-300">Total Boards</span>

        <span className="font-eng text-slate-300">Total Comments</span>

        <span className="font-eng text-sm ">{user.totalPoint}</span>

        <span className="font-eng text-sm">{user.totalBoards}</span>

        <span className="font-eng text-sm">{user.totalComments}</span>
      </div>
    </div>
  );
};
export default RankBar;
