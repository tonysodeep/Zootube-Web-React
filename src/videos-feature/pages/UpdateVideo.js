import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/utils/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './VideoForm.css';

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
    id: 'v2',
    title: 'Music video',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    resources: {
      thumbnailUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Notre_dame_saigon.jpg/440px-Notre_dame_saigon.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=m8mJIiMdtks',
    },
    creator: 'u2',
    userName: 'tonysodeep2',
  },
];
const UpdateVideo = () => {
  const [isLoading, setIsLoading] = useState(true);

  const videoId = useParams().videoId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const identifiedVideo = DUMMY_VIDEO.find((p) => p.id === videoId);

  useEffect(() => {
    if (identifiedVideo) {
      setFormData(
        {
          title: {
            value: identifiedVideo.title,
            isValid: true,
          },
          description: {
            value: identifiedVideo.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedVideo]);

  const videoUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedVideo) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find that place</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="video-form" onSubmit={videoUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE Video
      </Button>
    </form>
  );
};

export default UpdateVideo;
