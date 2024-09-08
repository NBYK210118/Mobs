import React from 'react';
import VideoDetail from '../components/video/VideoDetail';
import VoteSection from '../components/vote/VoteSection';

const ConflictResolutionPage = ({ match }) => {
  const videoId = match.params.id;

  return (
    <div className="conflict-resolution-page">
      <VideoDetail videoId={videoId} />
      <VoteSection videoId={videoId} />
    </div>
  );
};

export default ConflictResolutionPage;
