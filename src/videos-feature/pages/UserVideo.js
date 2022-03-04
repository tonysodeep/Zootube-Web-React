import React from 'react';
import { useParams } from 'react-router-dom';

import UserVideoList from '../components/UserVideoList';

const DUMMY_VIDEO = [
  {
    id: 'v1',
    title: 'Cooking show',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    resources: {
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Notre_dame_saigon.jpg/440px-Notre_dame_saigon.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=m8mJIiMdtks',
    },
    creator: 'u1',
    userName: 'tonysodeep',
  },
  {
    id: 'v1',
    title: 'Music video',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    resources: {
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Notre_dame_saigon.jpg/440px-Notre_dame_saigon.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=m8mJIiMdtks',
    },
    creator: 'u2',
    userName: 'tonysodeep',
  },
];

const UserVideo = () => {
  const userId = useParams().userId;
  const loadedVideos = DUMMY_VIDEO.filter((video) => video.creator === userId);
  return <UserVideoList items={loadedVideos} />;
};

export default UserVideo;
