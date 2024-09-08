import { useState } from 'react';
import Button from '../../common/Button';
import Percentage from './Percentage';

const VoteProgress = ({ canVote = true }) => {
  const [voteA, setVoteA] = useState(0);
  const [voteB, setVoteB] = useState(0);
  const [totalVotes, setTotalVotes] = useState(voteA + voteB);

  const handleVote = (val) => {
    if (val === 'VoteA') {
      setVoteA((prevState) => prevState + 1);
      setTotalVotes((prevState) => prevState + 1);
    } else if (val === 'VoteB') {
      setVoteB((prevState) => prevState + 1);
      setTotalVotes((prevState) => prevState + 1);
    }
  };
  const divide = totalVotes === 0 ? 1 : totalVotes;
  const percentA = ((voteA / divide) * 100).toFixed(1);
  const percentB = ((voteB / divide) * 100).toFixed(1);
  return (
    <div className="max-w-md rounded-lg">
      <div className="bg-gray-800 p-4 rounded-lg mb-4 shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[0.6rem] sm:text-[0.8rem] md:text-sm">Option A: {voteA}</span>
          <span className="text-[0.6rem] sm:text-[0.8rem] md:text-sm">Option B: {voteB}</span>
        </div>
        <Percentage percentA={percentA} percentB={percentB} />
        {canVote && (
          <div className="flex justify-center mt-5">
            <Button
              onClick={() => handleVote('VoteA')}
              className="bg-green-500 text-white text-xs md:text-sm px-3 py-1 sm:p-2 mr-4 rounded-lg hover:bg-green-600 transition-all"
            >
              VoteA
            </Button>
            <Button
              onClick={() => handleVote('VoteB')}
              className="bg-blue-500 text-white text-xs md:text-sm px-3 py-1 sm:p-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              VoteB
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoteProgress;
