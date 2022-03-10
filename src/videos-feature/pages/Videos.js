import React, { useEffect, useState } from 'react';

import VideoList from '../components/VideoList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Videos = () => {
  const [loadedVideos, setLoadedVideos] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const responseData = await sendRequest(
          'http://localhost:5069/api/videos'
        );
        setLoadedVideos(responseData.videos);
      } catch (err) {}
    };
    fetchVideos();
  }, [sendRequest]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedVideos && <VideoList items={loadedVideos} />}
    </React.Fragment>
  );
};

export default Videos;
