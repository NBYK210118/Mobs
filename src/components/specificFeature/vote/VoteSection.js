import React, { useState } from 'react';

const options = [
  { id: 1, name: 'Option A', votes: 0 },
  { id: 2, name: 'Option B', votes: 0 },
];

const VoteSection = ({ videoId, setTotalVotes }) => {
  const [votes, setVotes] = useState(options);

  const handleVote = (id) => {
    setVotes(votes.map((option) => (option.id === id ? { ...option, votes: option.votes + 1 } : option)));
    const total = votes.reduce((acc, val) => acc + val.votes, 0);
    setTotalVotes(total + 1);
  };

  return (
    <div className="w-full max-w-md">
      {votes.map((option) => (
        <div key={option.id} className="bg-gray-800 p-4 rounded-lg mb-4 shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs md:text-sm">{option.name}</span>
            <button
              onClick={() => handleVote(option.id)}
              className="bg-green-500 text-white text-xs md:text-sm px-3 py-1 sm:p-2 rounded-lg hover:bg-green-600 transition-all"
            >
              Vote
            </button>
          </div>
          <div className="bg-gray-700 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${(option.votes / Math.max(...votes.map((o) => o.votes), 1)) * 100}%` }}
            ></div>
          </div>
          <p className="text-right mt-2 text-xs md:text-sm">{option.votes} votes</p>
        </div>
      ))}
    </div>
  );
};

export default VoteSection;
