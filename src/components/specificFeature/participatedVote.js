import { Images } from '../common/icons';
import Pagination from '../common/paginiation';
import Percentage from './vote/Percentage';
import VoteProgress from './vote/VoteProgress';

const ParticipatedVote = ({ boards, ballot = false }) => {
  return (
    <div className="p-5 max-h-[400px] overflow-hidden overflow-y-scroll">
      {[...Array(5)].map((_, idx) => (
        <div
          key={idx}
          className="p-3 my-5 flex flex-col gap-5 rounded border border-gray-700 cursor-pointer hover:bg-gray-700 duration-150"
        >
          <div className="flex items-center gap-3">
            <img src={Images.juice1} alt="" className="w-16 h-16 rounded-full flex-shrink-0" />
            <div className="flex flex-col justify-center mx-3 flex-1 min-w-0 ">
              <div className="my-2 flex items-center gap-5">
                <span className="text-lg font-bold">게시물 제목</span>
                <span className="text-sm text-gray-500">2024-06-26 14:37</span>
                {ballot && <span className="p-1 bg-red-500 text-xs font-bold rounded">주장 A에 투표</span>}
                {!ballot && <span className="p-1 bg-green-500 text-xs font-bold rounded">주장 A에 투표</span>}
                <Percentage />
              </div>

              <span className="text-sm font-eng truncate">
                Nostrud labore enim elit nostrud.Cillum commodo aute laboris ex aliquip dolor.Veniam ex nostrud proident
                ullamco velit nisi sint sint tempor.
              </span>
            </div>
          </div>
          <span className="ml-2 text-sm font-eng">
            Labore fugiat nostrud adipisicing veniam id officia id commodo labore voluptate eiusmod ad. Consequat
            deserunt voluptate dolore eiusmod sit qui ullamco duis elit.
          </span>
        </div>
      ))}
      <div className="flex justify-center items-center mt-5 mb-3">
        <Pagination />
      </div>
    </div>
  );
};

export default ParticipatedVote;
