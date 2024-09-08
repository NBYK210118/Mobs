import { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaLongArrowAltUp } from 'react-icons/fa';
import { Images } from '../../common/icons';

const CommentItem = ({ item, className }) => {
  const [liked, setLiked] = useState(false);
  const [likedCount, setLikedCount] = useState(0);
  const [showArrow, setShowArrow] = useState(false);

  const handleLiked = () => {
    if (!liked) {
      setShowArrow(true);
      setLiked(true);
      setLikedCount((prevState) => prevState + 1);
      setTimeout(() => {
        setShowArrow(false);
      }, 1000);
    } else {
      setLiked(false);
      setLikedCount((prevState) => prevState - 1);
    }
  };

  return (
    <div className={className}>
      <div className="flex">
        <img src={Images.juice2} alt="profile_image" className="rounded-full mr-2 p-1 w-16 h-16" />
        <div className="flex flex-col">
          <div className="flex items-center my-2">
            <p className="text-[14px] sm:text-sm font-bold mr-3 font-title">
              {item?.nickname ? item.nickname : '사용자 닉네임'}
            </p>
            {liked ? (
              <FaThumbsUp className="cursor-pointer" onClick={() => handleLiked()} />
            ) : (
              <FaRegThumbsUp className="cursor-pointer" onClick={() => handleLiked()} />
            )}
            <p className="text-sm ml-1">{likedCount}</p>
            <FaLongArrowAltUp
              className={`transition-all duration-300 ${showArrow ? 'opacity-100 animate-sam' : 'opacity-0'}`}
            />
          </div>
          <p className="text-[12px] text-sm">{item?.content ? item?.content : '댓글 내용'}</p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
