import React from 'react';
import VideoList from '../components/VideoList';

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
    userName:'tonysodeep'
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
    userName:'tonysodeep'
  },
];

const Videos = () => {
  return <VideoList items={DUMMY_VIDEO} />;
};

export default Videos;
