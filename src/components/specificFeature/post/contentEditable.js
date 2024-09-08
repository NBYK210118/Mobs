import ContentEditable from 'react-contenteditable';
import DOMPurify from 'dompurify';

const convertPathsToUrls = (content) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = content;
  const mediaElements = divElement.querySelectorAll('img, video');
  mediaElements.forEach((media) => {
    const path = media.src;
    media.src = `${process.env.SUPABASE_URL}/storage/v1/object/public/your-bucket-name/${path}`;
  });
  return divElement.innerHTML;
};

const ContentEditor = ({ innerRef, html, onChange, onFocus, onKeyUp, content }) => {
  const sanitizedContent = DOMPurify.sanitize(convertPathsToUrls(content));
  return (
    <ContentEditable
      innerRef={innerRef}
      html={html}
      onChange={onChange}
      onFocus={onFocus}
      onKeyUp={onKeyUp}
      className="col-span-5 p-2 border border-gray-300 rounded focus:outline-gray-300 overflow-auto max-h-72"
      tagName="div"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

export default ContentEditor;
