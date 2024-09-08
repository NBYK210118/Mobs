import { IoMdClose } from 'react-icons/io';

const ImagePreview = ({ images = [], setCurrentImageFile, setImageFileSize }) => {
  const handleVideoPreviewList = (closeClickedIndex) => {
    setCurrentImageFile(images.filter((_, idx) => idx !== closeClickedIndex));
    setImageFileSize((prevState) => prevState.filter((_, idx) => idx !== closeClickedIndex));
  };

  return (
    <>
      {images.map((url, idx) => (
        <div key={idx} className="flex-shrink-0 flex-grow-0 basis-32 max-h-32 p-2 relative cursor-pointer">
          <img src={url} autoPlay preload="auto" muted className="p-1 hover:bg-slate-100" />
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

export default ImagePreview;
