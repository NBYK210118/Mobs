import Modal from "react-modal";
import Button from "../common/Button";
import { IoMdClose } from "react-icons/io";

const ImageViewer = ({
  isOpen,
  onRequestClose,
  imgSrc,
  className,
  overlayClassName,
}) => {
  if (!imgSrc) {
    return;
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={className}
      overlayClassName={overlayClassName}
    >
      <div className="bg-white p-5 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <Button
            onClick={onRequestClose}
            className="mb-3 p-2 bg-gray-200 hover:bg-gray-300 rounded"
          >
            <IoMdClose />
          </Button>
        </div>
        <img src={imgSrc} alt="Detailed View" className="" />
      </div>
    </Modal>
  );
};

export default ImageViewer;
