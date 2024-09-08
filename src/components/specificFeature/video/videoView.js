const VideoView = ({ videoUrl }) => {
  return (
    <div className="flex justify-center">
      <video src={videoUrl} preload="auto" muted controls></video>
    </div>
  );
};

export default VideoView;
