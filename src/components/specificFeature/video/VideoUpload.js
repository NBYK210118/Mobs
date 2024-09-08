import React, { useState } from 'react';
import useVideo from '../../../hooks/useVideo';
import Button from '../../common/Button';
import Input from '../../common/Input';

const VideoUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const { uploadVideo, loading, error } = useVideo();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadVideo({ title, description, file });
  };

  return (
    <div className="video-upload">
      <h2>Upload a Video</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <Input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <Input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        <Button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload'}
        </Button>
      </form>
    </div>
  );
};

export default VideoUpload;
