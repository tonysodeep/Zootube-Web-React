import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/utils/validators';
import { useHttpClient } from '../../shared/hooks/http-hook';
import { AuthContext } from '../../shared/context/auth-context';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ImageUpload from '../../shared/components/FormElements/ImageUpload';

import './VideoForm.css';
import VideoUpload from '../../shared/components/FormElements/VideoUpload';

const NewVideo = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      image: {
        value: null,
        isValid: false,
      },
      video: {
        value: null,
        isValid: false,
      },
    },
    false
  );

  const history = useHistory();

  const videoSubmitHandler = async (event) => {
    console.log(formState);
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', formState.inputs.title.value);
      formData.append('description', formState.inputs.description.value);
      formData.append('creator', auth.userId);
      formData.append('image', formState.inputs.image.value);
      formData.append('video', formState.inputs.video.value);
      await sendRequest('http://localhost:5069/api/videos/', 'POST', formData, {
        Authorization: 'Bearer ' + auth.token,
      });
      //Redirect the user to differte page
      history.push('/');
    } catch (error) {}
  };
  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      <form className="video-form" onSubmit={videoSubmitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter valid title"
          onInput={inputHandler}
        />
        <ImageUpload
          center
          id="image"
          onInput={inputHandler}
          errorText="Please provide an image"
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter valid description (at least 5 char)"
          onInput={inputHandler}
        />
        <VideoUpload
          center
          id="video"
          onInput={inputHandler}
          errorText="Please provide a video"
        />
        <Button type="submit" disabled={!formState.isValid}>
          ADD VIDEO
        </Button>
      </form>
    </React.Fragment>
  );
};

export default NewVideo;
