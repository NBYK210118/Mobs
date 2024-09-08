import { useState } from 'react';
import Button from '../../common/Button';
import { IoIosSend } from 'react-icons/io';
import TextArea from '../../common/DynamicInput';
import CommentItem from '../comment/CommentItem';
import ImageViewer from '../imageViewer';
import { FaComments, FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import CommentList from '../comment/CommentList';
import { comments } from '../../../sample_data/sample_data';
import { DownThumbCheckedIcon, DownThumbIcon, Images, TrophyIcon } from '../../common/icons';
import VoteSection from '../vote/VoteSection';
import VideoView from '../video/videoView';

const FeedDisplayItem = ({ item }) => {
  const [review, setReview] = useState('');
  const [mouseOver, setMouseOver] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [liked, setLiked] = useState(false);
  const [disLiked, setDisLiked] = useState(false);
  const [totalVotes, setTotalVotes] = useState(0);

  const handleTextArea = (value) => {
    if (value !== '' && value !== undefined && value !== null) {
      setMouseOver(true);
    } else {
      setMouseOver(false);
    }
    setReview(value);
  };

  const openModal = (imageSrc) => {
    setModalImageSrc(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFeedLiked = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
      setDisLiked(false);
    }
  };

  const handleFeedDisLiked = () => {
    if (disLiked) {
      setDisLiked(false);
    } else {
      setDisLiked(true);
      setLiked(false);
    }
  };

  return (
    <div className="m-1 p-2 xl:m-3 xl:p-4 xl:pb-6 space-x-6 space-y-6 max-w-[400px] xl:max-w-[700px] bg-slate-800 rounded-md duration-150 cursor-pointer">
      <div className="flex items-center m-3">
        <img src={Images.juice1} alt="profile_image" className="rounded-full w-16 h-16" />
        <div className="flex flex-col ml-4">
          <p className="text-[12px] sm:text-sm">{item.nickname}</p>
          <p className="text-[10px] sm:text-xs">{item.category}</p>
          <p className="text-[12px] sm:text-sm">{item.title}</p>
        </div>
      </div>

      <div className="flex flex-col items-center m-3">
        <img src={Images.juice1} alt="x" className="cursor-pointer p-5" onClick={() => openModal(Images.juice1)} />
        <p className="text-[12px] sm:text-sm my-5">{item.content}</p>
      </div>
      <VideoView videoUrl={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'} />
      <div className="flex justify-center">
        <VoteSection setTotalVotes={setTotalVotes} />
      </div>

      <div className="flex justify-center items-center gap-5 m-3">
        <div
          className={`p-2 flex items-center gap-3 shadow shadow-gray-600 rounded duration-300 ${
            liked ? 'bg-blue-500 hover:bg-blue-500/50 border-white' : 'hover:bg-white/30 border-gray-500'
          }`}
          onClick={() => handleFeedLiked()}
        >
          {liked ? <FaThumbsUp className="cursor-pointer" /> : <FaRegThumbsUp className="cursor-pointer" />}
          <span className="text-sm font-primary">좋아요 (24)</span>
        </div>
        <div
          className={`p-2 flex items-center gap-3 shadow shadow-gray-600 rounded duration-300 ${
            disLiked ? 'bg-red-500/80 hover:bg-red-500/65 border-white' : 'hover:bg-white/30 border-gray-500'
          }`}
          onClick={() => handleFeedDisLiked()}
        >
          {disLiked ? <DownThumbCheckedIcon /> : <DownThumbIcon />}
          <span className="text-sm font-primary">싫어요 (2)</span>
        </div>
      </div>

      <div className="flex items-center">
        <img src={Images.juice2} alt="profile_image" className="rounded-full mr-2 w-16 h-16" />
        <TextArea
          value={review}
          onChange={(e) => handleTextArea(e.target.value)}
          placeholder="댓글을 입력해주세요"
          className="overflow-hidden w-full py-1 pl-2 mr-1 bg-slate-500 rounded-lg shadow-lg outline-none text-[14px] focus:outline-[0.15rem] focus:outline-blue-500 duration-300"
        />
        <Button onMouseOver={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}>
          <IoIosSend
            className={`text-4xl bg-slate-500 hover:bg-slate-600 rounded-full p-1 transition duration-300 ${
              mouseOver ? 'animate-wiggle_diagonal' : ''
            }`}
          />
        </Button>
      </div>

      <div className="flex items-center font-bold">
        <TrophyIcon className="text-sm sm:text-3xl text-yellow-500 mr-1" />
        <p>Top3 Comments</p>
        <Button
          className="p-2 ml-2 text-lg sm:text-xl rounded-full hover:bg-slate-500"
          onClick={() => setShowComments(true)}
        >
          <FaComments />
        </Button>
      </div>
      {/* 베스트 댓글 TOP3 데이터 */}
      {[...Array(3)].map((item, idx) => (
        <CommentItem item={item} key={idx} className={'p-3 rounded-lg border border-gray-500'} />
      ))}
      <ImageViewer
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imgSrc={modalImageSrc}
        className={'flex justify-center items-center p-32 pl-64'}
        overlayClassName={'fixed inset-0 bg-black bg-opacity-50'}
      />
      <CommentList
        isOpen={showComments}
        onRequestClose={() => setShowComments(false)}
        className={'h-full flex justify-center items-center'}
        overlayClassName={'fixed inset-0 bg-black bg-opacity-50'}
        comments={comments}
      />
    </div>
  );
};

export default FeedDisplayItem;
