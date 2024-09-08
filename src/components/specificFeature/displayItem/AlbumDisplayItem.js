import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VoteProgress from '../vote/VoteProgress';

// 오픈된 투표에서 사용할 디스플레이 방식이면, hasPolls 옵션을 true로 설정 후 VoteSection 조건부 렌더링, 영상 썸네일의 크기는 240x120
// 일반 게시물일 경우, hasPolls 옵션은 false -> VoteSection은 렌더링되지 않음, 이미지나 영상의 썸네일의 크기는
// 텍스트를 어떤 식으로 렌더링해줄 것인지 또는 텍스트는 아예 렌더링해주지 않는 방식
// hasPolls는 true로 설정해주는 경우는 이미 읽었던 게시물들에 대해 편하게 투표할 수 있게 내 프로필 페이지 상에서 구현해볼 수 있음
// Display 방식을 마이 프로필에서 설정하기 vs 게시물 리스트 옆에 floating

const AlbumDisplayItem = ({ hasPolls = false, layout }) => {
  const [totalVotes, setTotalVotes] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (totalVotes > 0) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    }
  }, [totalVotes]);

  return (
    <div className="border border-gray-600 bg-gray-900 rounded md:m-3 m-1 md:mb-5 mb-3 md:p-5 p-3">
      <div className="flex">
        <span className="text-xs md:text-sm md:mb-2 p-1 rounded-lg font-bold hover:bg-gray-600 cursor-pointer">
          &lt;카테고리명&gt;
        </span>
        <Link className="truncate p-1 hover:underline text-xs md:text-sm font-bold md:ml-3">게시물 제목</Link>
      </div>
      <img src="https://via.placeholder.com/300x200" alt="X" className="mx-auto my-1 md:mb-5 mb-2" />
      <VoteProgress canVote={false} layout={layout} />
      {/* {!hasPolls && (
        <>
          <div className="flex flex-1 items-center">
            <h1 className="text-xs mb-2 md:text-sm md:mb-0">총 득표 수: {totalVotes}</h1>
            <FaArrowUp
              className={`transition-transform duration-500 ${visible ? 'visible animate-sam' : 'hidden opacity-0'}`}
            />
          </div>
          <VoteSection total={totalVotes} setTotalVotes={setTotalVotes} />
        </>
      )} */}
    </div>
  );
};

export default AlbumDisplayItem;
