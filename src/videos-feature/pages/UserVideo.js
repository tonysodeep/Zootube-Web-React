import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';

import { useHttpClient } from '../../shared/hooks/http-hook';
import UserVideoList from '../components/UserVideoList';

const UserVideo = () => {
  const [userLoadedVideos, setUserLoadedVideos] = useState();
  const [userInfo, setUserInfo] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const userId = useParams().userId;

  useEffect(() => {
    const fetchUserVideos = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5069/api/videos/user/${userId}`
        );
        console.log('responseData', responseData);
        const { name, imageUrl } = responseData;
        setUserInfo({ name, imageUrl });
        setUserLoadedVideos(responseData.userVideos);
      } catch (err) {}
    };
    fetchUserVideos();
  }, [sendRequest, userId]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && userLoadedVideos && userInfo && (
        <UserVideoList items={userLoadedVideos} userInfo={userInfo} />
      )}
    </React.Fragment>
  );
};

export default UserVideo;
