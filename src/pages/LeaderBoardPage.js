import { Scrollbars } from 'react-custom-scrollbars-2';
import { TrophyIcon } from '../components/common/icons';
import { useState } from 'react';
import { users } from '../sample_data/sample_data';
import GameGroup from '../components/specificFeature/leaderBoard/gameGroup';
import RankBar from '../components/specificFeature/leaderBoard/rankBar';
import ShowUserInfo from '../components/specificFeature/leaderBoard/showUserInfo';

const LeaderBoardPage = () => {
  const [currentUser, setCurrentUser] = useState(users[0]);

  const selectCurrentRankBar = (user) => {
    setCurrentUser(user);
  };

  return (
    <div className="w-full grid grid-cols-5 gap-24 ml-10 mr-5 mb-10">
      <GameGroup />
      <div className="p-5 col-start-2 col-end-5 flex flex-col border border-gray-800 bg-gray-800 shadow-sm shadow-gray-600">
        <div className="p-2 flex items-center gap-2 ml-4 mb-4 border-2 border-gray-800">
          <TrophyIcon className="text-3xl text-yellow-500" />
          <h1 className="font-eng text-2xl font-bold">LEADERBOARD</h1>
        </div>
        <Scrollbars>
          {users.map((user, idx) => (
            <RankBar user={user} onClick={() => selectCurrentRankBar(user)} />
          ))}
        </Scrollbars>
      </div>

      <div className="">
        <Scrollbars>
          <ShowUserInfo currentUser={currentUser} />
        </Scrollbars>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
