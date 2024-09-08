import Modal from 'react-modal';
import CommentItem from './CommentItem';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { IoMdClose } from 'react-icons/io';
import Button from '../../common/Button';

const CommentList = ({ isOpen, onRequestClose, className, overlayClassName, comments = [] }) => {
  if (comments.length > 0) {
    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={className} overlayClassName={overlayClassName}>
        <div className="bg-white p-5 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">댓글 리스트</h1>
            <Button onClick={onRequestClose} className="mb-3 p-2 bg-gray-200 hover:bg-gray-300 rounded">
              <IoMdClose />
            </Button>
          </div>
          <Scrollbars style={{ width: 500, height: 400 }}>
            {comments.map((item, idx) => (
              <CommentItem item={item} key={idx} className={'p-3 m-3 border border-gray-200'} />
            ))}
            {/* 서버 사이드 렌더링 예정 -> supabase -> 한 페이지당 15개의 comment만을 렌더링 새로운 페이지를 클릭할 때마다 새로운 페이지를 렌더링
            ex) await supabase.from('Board').
            <ul className="flex justify-center items-center">
              <li className="m-1">1</li>
              <li className="m-1">2</li>
              <li className="m-1">3</li>
              <li className="m-1">4</li>
            </ul> */}
          </Scrollbars>
        </div>
      </Modal>
    );
  }
};

export default CommentList;
