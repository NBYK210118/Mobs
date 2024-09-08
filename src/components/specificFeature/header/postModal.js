import Modal from 'react-modal';
import { IoMdClose } from 'react-icons/io';
import { useEffect, useRef, useState } from 'react';
import TimeDropDown from './timeDropDown';
import VideoPreview from '../video/videoPreview';
import { ImageIcon, TimeIcon, VideoIcon } from '../../common/icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ImagePreview from '../image/ImagePreview';
import formatBytes from '../../../utils/formatBytes';
import ContentEditor from '../post/contentEditable';
import { registerBoard } from '../../../services/boardService';
import useUserState from '../../../hooks/useUserState';
import Draggable from 'react-draggable';

const PostModal = ({ isOpen, onRequestClose, overlayClassName }) => {
  const { token, userId } = useUserState();
  const [title, setTitle] = useState('');
  const [fileSizeMessage, setFileSizeMessage] = useState(null);
  const [currentVideoFile, setCurrentVideoFile] = useState([]);
  const [currentImageFile, setCurrentImageFile] = useState([]);
  const [openPolls, setOpenPolls] = useState(false);
  const [duration, setDuration] = useState('시간 선택');
  const [dateSettingModal, setDateSettingModal] = useState(false);
  const [imageFileSize, setImageFileSize] = useState([]);
  const [videoFileSize, setVideoFileSize] = useState([]);
  const [html, setHtml] = useState('');
  const [cursorPosition, setCursorPosition] = useState(null);
  const [selectedStartDate, setSelectedStartDate] = useState('시간 선택');
  const contentEditable = useRef(null);
  const imageSelectRef = useRef();
  const videoSelectRef = useRef();

  const totalFileSize =
    imageFileSize.reduce((acc, val) => acc + val, 0) + videoFileSize.reduce((acc, val) => acc + val, 0);

  useEffect(() => {
    const handleContentChange = () => {
      const currentHtml = contentEditable.current.innerHTML;
      const parser = new DOMParser();
      const doc = parser.parseFromString(currentHtml, 'text/html');

      // 이미지 태그와 비디오 태그 추출
      const imgTags = Array.from(doc.getElementsByTagName('img'));
      const videoTags = Array.from(doc.getElementsByTagName('video'));

      // 현재 HTML에 남아있는 이미지 src와 비디오 src 추출
      const currentImageSrcs = imgTags.map((img) => img.src);
      const currentVideoSrcs = videoTags.map((video) => video.querySelector('source').src);

      // currentImageFile과 currentVideoFile 업데이트
      setCurrentImageFile((prev) => prev.filter((src) => currentImageSrcs.includes(src)));
      setCurrentVideoFile((prev) => prev.filter((src) => currentVideoSrcs.includes(src)));
    };

    const contentEditableElement = contentEditable.current;
    if (contentEditableElement) {
      contentEditableElement.addEventListener('input', handleContentChange);
    }

    return () => {
      if (contentEditableElement) {
        contentEditableElement.removeEventListener('input', handleContentChange);
      }
    };
  }, [contentEditable]);

  useEffect(() => {
    const condition = totalFileSize > 1073741824;
    if (condition) {
      setFileSizeMessage(`최대 첨부 가능한 파일 용량은 1GB 입니다. 현재 크기: ${formatBytes(totalFileSize)}`);
    } else {
      setFileSizeMessage(null);
    }
  }, [totalFileSize]);

  useEffect(()=>{
    console.log("html : ", html);
  },[html])

  const handleClose = () => {
    onRequestClose();
    setDuration('시간 선택');
    setOpenPolls(false);
    setCurrentVideoFile([]);
    setCurrentImageFile([]);
    setImageFileSize([]);
    setVideoFileSize([]);
    setCursorPosition(null);
    setHtml('');
    setFileSizeMessage('');
  };

  const handleHtmlChange = (e) => {
    // const eventValue = e.target.value;
    // const textTagValue = `<p>${eventValue}</p>`;
    // // console.log('e.target.value: ', e.target.value);
    // setHtml(textTagValue);
    console.log('e.target.childNodes: ',contentEditable.current.childNodes);
    setHtml(e.target.value);
    saveCursorPosition();
  };

  const saveCursorPosition = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const preSelectionRange = range.cloneRange();
      preSelectionRange.selectNodeContents(contentEditable.current);
      preSelectionRange.setEnd(range.startContainer, range.startOffset);
      const start = preSelectionRange.toString().length;
      setCursorPosition(start);
    }
  };  

  const insertHtmlAtCursor = (htmlToInsert) => {
    const originalHtml = contentEditable.current.innerHTML;
    const newHtml = originalHtml + htmlToInsert;
    console.log('newHtml: ', newHtml);
    setHtml(newHtml);
  };

  const handleImageSelect = (e) => {
    const files = Array.from(e.target.files);
    const fileReaders = [];

    const largeFile = files.find((file) => file.size > 1073741824);

    if (largeFile || totalFileSize > 1073741824) {
      setFileSizeMessage('One or more files exceed 1GB.');
      setCurrentImageFile((prevState) => prevState);
      setImageFileSize((prevState) => prevState);
      return;
    }

    files.forEach((file) => {
      setImageFileSize((prevState) => [...prevState, file.size]);
      const reader = new FileReader();
      const readerPromise = new Promise((resolve) => {
        reader.onload = (e) => {
          resolve(e.target.result);
        };
      });
      reader.readAsDataURL(file);
      fileReaders.push(readerPromise);
    });

    Promise.all(fileReaders)
      .then((results) => {
        setCurrentImageFile((prevState) => [...prevState, ...results]);
        results.forEach((result) => {
          try {
            const imgTag = `<img src=${result} alt="image" class="inline-block max-w-36 max-h-36"/>`;
            insertHtmlAtCursor(imgTag);
          } catch (error) {
            console.error('Error inserting image at cursor:', error);
            setFileSizeMessage('There was an error inserting one or more images.');
          }
        });
      })
      .catch((error) => {
        console.error('Error processing files:', error);
        setFileSizeMessage('There was an error processing one or more files.');
      });
  };

  const handleVideoSelect = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => setVideoFileSize((prevState) => [...prevState, file.size]));
    const largeFile = files.find((file) => file.size > 1073741824);

    if (largeFile || totalFileSize > 1073741824) {
      setFileSizeMessage('One or more files exceed 1GB.');
      setCurrentVideoFile((prevState) => prevState.pop());
      setVideoFileSize((prevState) => prevState.pop());
      return;
    }

    const results = files.map((item) => URL.createObjectURL(item));

    results.forEach((result) => {
      const videoTag = `<video controls class='inline-block max-w-full'><source src="${result}" type="video/mp4"></video>`;
      insertHtmlAtCursor(videoTag);
    });

    setFileSizeMessage('');
    setCurrentVideoFile((prevState) => [...prevState, ...results]);
  };

  const handleDuration = (option) => {
    setDuration(option);
    if (option === '직접 입력') {
      setDateSettingModal(true);
    }
  };

  const handlePollCheck = (e) => {
    const checked = e.target.checked;
    if (!checked) {
      setDuration('시간 선택');
    }
    setOpenPolls(checked);
  };

  const saveContent = async () => {
    const editableDiv = editableDiv.current;
    const initialContent = editableDiv.innerHTML;

    const result = await registerBoard({
      title,
      description: initialContent,
      profileId: userId,
    });
  };

  return (
    <>
      <Draggable handle=".target_modal">
        <Modal
          isOpen={isOpen}
          onRequestClose={handleClose}
          overlayClassName={overlayClassName}
          className="target_modal p-6 w-full max-w-3xl max-h-[700px] mx-auto mt-20 border-2 border-green-500 bg-white rounded-lg shadow-xl"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">피드 작성</h2>
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
              <IoMdClose size={24} />
            </button>
          </div>
          <div className="grid grid-cols-6 gap-3">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="col-span-5 p-2 border border-gray-300 rounded focus:outline-gray-300"
              placeholder="게시물 제목 입력"
            />
            <div className="col-span-1 flex flex-col gap-2">
              <button
                className="text-sm p-2 border border-gray-300 rounded hover:bg-gray-100"
                onClick={() => saveContent()}
              >
                임시 저장
              </button>
              <button className="text-sm p-2 border border-gray-300 rounded hover:bg-gray-100">업로드</button>
            </div>
            <div className="col-span-6">
              <div className="flex items-center gap-3">
                <h2 className="my-2 text-blue-600 font-semibold">
                  업로드된 파일 ({currentVideoFile.length + currentImageFile.length})
                </h2>
                <span className={`${fileSizeMessage ? 'text-red-500' : 'text-green-500'} text-xs`}>
                  {fileSizeMessage ? fileSizeMessage : `첨부된 파일 크기 ${formatBytes(totalFileSize)}`}
                </span>
              </div>

              <div className="flex items-center gap-4 overflow-x-auto">
                <VideoPreview
                  videos={currentVideoFile}
                  setCurrentVideos={setCurrentVideoFile}
                  setVideoFileSize={setVideoFileSize}
                />
                <ImagePreview
                  images={currentImageFile}
                  setCurrentImageFile={setCurrentImageFile}
                  setImageFileSize={setImageFileSize}
                />
              </div>
            </div>
            <ContentEditor
              innerRef={contentEditable}
              html={html}
              onChange={handleHtmlChange}
              onFocus={saveCursorPosition} // 포커스될 때 커서 위치 저장
              onKeyUp={saveCursorPosition}
            />

            <div className="col-span-1 flex flex-col gap-2 overflow-hidden">
              <button className="p-2 text-sm whitespace-nowrap border border-gray-300 rounded hover:bg-gray-100">
                카테고리 선택
              </button>
              <div
                className="flex justify-center items-center gap-1 p-2 text-sm border border-gray-300 rounded hover:bg-gray-100"
                onMouseDown={saveCursorPosition}
                onClick={() => imageSelectRef.current.click()}
              >
                <input
                  type="file"
                  ref={imageSelectRef}
                  className="hidden"
                  onChange={(e) => handleImageSelect(e)}
                  multiple
                  accept="image/*"
                />
                <ImageIcon className="text-lg" />
                <button className="">이미지</button>
              </div>
              <div
                className="flex justify-center items-center gap-1 p-2 text-sm border border-gray-300 rounded hover:bg-gray-100"
                onClick={() => videoSelectRef.current.click()}
              >
                <input
                  type="file"
                  ref={videoSelectRef}
                  className="hidden"
                  onChange={(e) => handleVideoSelect(e)}
                  multiple
                  accept="video/*"
                />
                <VideoIcon className="text-lg" />
                <button className="">동영상</button>
              </div>

              <div className="p-2 border border-gray-300 rounded flex items-center gap-2">
                <input type="checkbox" id="vote" value={openPolls} onChange={(e) => handlePollCheck(e)} />
                <label htmlFor="vote" className="text-sm">
                  투표 진행
                </label>
              </div>
              {openPolls && <TimeDropDown duration={duration} handleDuration={handleDuration} />}
              {openPolls && dateSettingModal && duration === '직접 입력' && (
                <>
                  <DatePicker
                    showTimeSelect
                    shouldCloseOnSelect
                    minDate={Date.now()}
                    selected={selectedStartDate}
                    onChange={(date) => setSelectedStartDate(date)}
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="w-[6.8rem] p-2 text-xs border border-blue-500 rounded hover:bg-gray-100"
                  />
                  <div className="flex justify-center items-center">
                    <span>~</span>
                  </div>

                  <DatePicker
                    showTimeSelect
                    shouldCloseOnSelect
                    minDate={Date.now()}
                    selected={selectedStartDate}
                    onChange={(date) => setSelectedStartDate(date)}
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="w-[6.8rem] p-2 text-xs border border-green-500 rounded hover:bg-gray-100"
                  />
                </>
              )}
              <button className="flex items-center gap-2 p-2 text-sm border border-gray-300 rounded hover:bg-gray-100">
                <TimeIcon className="text-xl" />
                <span>타임라인</span>
              </button>
              <button className="p-2 text-sm whitespace-nowrap border border-gray-300 rounded hover:bg-gray-100">
                해시 태그
              </button>
            </div>
          </div>
        </Modal>
      </Draggable>
    </>
  );
};

export default PostModal;
