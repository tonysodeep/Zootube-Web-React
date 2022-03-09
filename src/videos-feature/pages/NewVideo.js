import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { useForm } from '../../shared/hooks/form-hook';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/utils/validators';
import './VideoForm.css';

const NewVideo = () => {
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
    },
    false
  );
  const videoSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); //send to back end
  };
  return (
    <form className="video-form" onSubmit={videoSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter valid description (at least 5 char)"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD VIDEO
      </Button>
    </form>
  );
};

export default NewVideo;
