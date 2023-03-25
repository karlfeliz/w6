import { useForm } from 'react-hook-form';
import React from 'react';
import './CreateUserPage.scss';
import { FormattedMessage } from 'react-intl';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const CreateUserPage = () => {
  const [newUser, setNewUser] = React.useState({ id: '', name: '', username: '', email: '', website: '' });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const addNewUser = () => {
    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        setNewUser({
          id: '',
          name: '',
          username: '',
          email: '',
          website: '',
        });
      });
  };
  const onSubmit = (data) => addNewUser(data);

  return (
    <div className='register-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='register-form__fieldset'>
          <p>
            <FormattedMessage id='createUserPage.name' />
          </p>
          <input type='text' {...register('name', { required: true })} />
          {errors?.name && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage.required' />
            </p>
          )}
        </fieldset>
        <fieldset className='register-form__fieldset'>
          <p>
            <FormattedMessage id='createUserPage.username' />
          </p>
          <input type='text' {...register('username', { required: true })} />
          {errors?.username && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage.required' />
            </p>
          )}
        </fieldset>
        <fieldset className='register-form__fieldset'>
          <p>
            <FormattedMessage id='createUserPage.email' />
          </p>
          <input type='email' {...register('email', { required: true })} />
          {errors?.email && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage.required' />
            </p>
          )}
        </fieldset>
        <fieldset className='register-form__fieldset'>
          <p>
            <FormattedMessage id='createUserPage.phone' />
          </p>
          <input type='number' {...register('phone', { required: true })} />
          {errors?.phone && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage.required' />
            </p>
          )}
        </fieldset>
        <fieldset className='register-form__fieldset'>
          <p>
            <FormattedMessage id='createUserPage.website' />
          </p>
          <input type='text' {...register('website', { required: true })} />
          {errors?.website && (
            <p className='register-form__error'>
              <FormattedMessage id='createUserPage.required' />
            </p>
          )}
        </fieldset>
        <button type='submit'>
          <FormattedMessage id='createUserPage.submitButton' />
        </button>
      </form>
    </div>
  );
};

export default CreateUserPage;
