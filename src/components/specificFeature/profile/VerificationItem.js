import { useState } from 'react';
import { RightArrowIcon } from '../../common/icons';
import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import Button from '../../common/Button';

const VerificationItem = ({
  logoImg,
  gameName = 'Game Name',
  userName = '',
  verificationDate = '2024-06-25 15:22',
}) => {
  const [registerHover, setRegisterHover] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onRequestClose = () => {
    setIsOpen(false);
  };

  const goForCertificate = () => {
    setIsOpen(true);
  };

  return (
    <div className="p-5 flex items-center gap-5 bg-slate-800 ">
      <img src={logoImg} alt="" className="w-20 h-20 rounded-full" />
      <div className="flex flex-col gap-3">
        <span className="text-lg font-bold">{gameName}</span>
        {userName ? (
          <>
            <div className="flex items-center gap-3">
              <span className="text-sm text-blue-500">등록된 유저명 : {userName}</span>
              <img src={require('../../../assets/images/verification.png')} alt="" className="w-7 h-7" />
              <img src={require('../../../assets/images/unverified.png')} alt="" className="w-7 h-7" />
            </div>
            <div className="flex items-center gap-5">
              <span className="text-sm">등록 정보</span>
              <span className="text-xs">{verificationDate}</span>
            </div>
          </>
        ) : (
          <>
            <div
              className="flex items-center text-green-500"
              onMouseOver={() => setRegisterHover(true)}
              onMouseLeave={() => setRegisterHover(false)}
            >
              <span
                className="text-sm hover:font-bold hover:underline cursor-pointer"
                onClick={() => goForCertificate()}
              >
                지금 유저 등록하기!
              </span>
              <RightArrowIcon className={`${registerHover ? 'animate-wiggleRight' : ''} text-2xl`} />
            </div>
            <Modal
              isOpen={isOpen}
              onRequestClose={onRequestClose}
              contentLabel="User Certification"
              overlayClassName={'fixed inset-0 bg-black bg-opacity-50'}
            >
              <div className="flex justify-end">
                <Button onClick={onRequestClose} className="mb-3 p-2 bg-gray-200 hover:bg-gray-300 rounded">
                  <IoMdClose />
                </Button>
              </div>
            </Modal>
          </>
        )}
      </div>
    </div>
  );
};

export default VerificationItem;
