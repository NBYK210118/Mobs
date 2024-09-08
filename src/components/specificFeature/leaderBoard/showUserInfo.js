import { Link } from 'react-router-dom';

const ShowUserInfo = ({ currentUser }) => {
  return (
    <>
      <div className="flex flex-col justify-around items-center gap-5 mb-10 p-5 bg-gray-800">
        <img
          src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg"
          alt=""
          className="w-32 h-32 rounded-full"
        />
        <span className="font-eng text-2xl">{currentUser.username}</span>
        <span className="font-eng">255 Level</span>
        <div className="flex flex-col gap-3 mb-3">
          <span className="font-eng">Accumulated Exp</span>
          <div className="w-full bg-white">
            <div className="w-1/3 h-6 bg-green-500" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 mb-10 p-5 bg-gray-800">
        <h1 className="w-full font-bold text-center">Win Rate</h1>
        <div className="grid grid-cols-1 gap-3 mx-3 truncate">
          <span className="text-sm text-cyan-500">League of Legend 54%</span>
          <span className="text-sm text-red-400">VALORANT 45%</span>
          <span className="text-sm text-yellow-400">BattleGround 77.4%</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 mb-10 p-5 bg-gray-800">
        <h1 className="w-full font-bold text-center">Recent Boards</h1>
        <div className="grid grid-cols-1 gap-3 mx-3 truncate">
          <Link to={'/'} className="text-[#D8FFEA] text-sm truncate hover:underline">
            Category Board title 1 asdasdasdasdaasdasdasdasdasdasdas
          </Link>
          <Link to={'/'} className="text-[#D8FFEA] text-sm truncate hover:underline">
            Category Board title 2 asdasdasdasdaasdasdasdasdasdasdas{' '}
          </Link>
          <Link to={'/'} className="text-[#D8FFEA] text-sm truncate hover:underline">
            Category Board title 3 asdasdasdasdaasdasdasdasdasdasdas
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5 mb-10 p-5 bg-gray-800">
        <h1 className="w-full font-bold text-center">Recent Comments</h1>
        <div className="grid grid-cols-1 gap-3 mx-3 truncate">
          <Link className="text-[#D8FFEA] text-sm truncate hover:underline">
            Category Board title 1 asdasdasdasdaasdasdasdasdasdasdas
          </Link>
          <Link className="text-[#D8FFEA] text-sm truncate hover:underline">
            Category Board title 2 asdasdasdasdaasdasdasdasdasdasdas{' '}
          </Link>
          <Link className="text-[#D8FFEA] text-sm truncate hover:underline">
            Category Board title 3 asdasdasdasdaasdasdasdasdasdasdas
          </Link>
        </div>
      </div>
    </>
  );
};

export default ShowUserInfo;
