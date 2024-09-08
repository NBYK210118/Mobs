import { IoMdClose } from 'react-icons/io';

const VideoPreview = ({ videos = [], setCurrentVideos, setVideoFileSize }) => {
  const handleVideoPreviewList = (closeClickedIndex) => {
    setCurrentVideos(videos.filter((_, idx) => idx !== closeClickedIndex));
    setVideoFileSize((prevState) => prevState.filter((_, idx) => idx !== closeClickedIndex));
  };

  return (
    <>
      {videos.map((url, idx) => (
        <div key={idx} className="flex-shrink-0 flex-grow-0 basis-32 p-2 relative cursor-pointer">
          <video src={url} preload="auto" muted controls></video>
          <div
            className="p-1 absolute top-3 right-4 z-10 bg-white border-2 border-green-500 rounded-full "
            onClick={() => handleVideoPreviewList(idx)}
          >
            <IoMdClose size={15} className="text-gray-600 font-bold" />
          </div>
        </div>
      ))}
    </>
  );
};

export default VideoPreview;
