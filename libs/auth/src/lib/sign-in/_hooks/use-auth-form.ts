import React, { useState, ChangeEvent, FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRootStore } from '../_stores/root-store.provider';

export type authDto = {
  email: string;
  password: string;
};

export const useAuthForm = () => {
  const { authStore } = useRootStore();
  const navigate = useNavigate();
  const [formState, setFormState] = useState<authDto>({
    email: '',
    password: '',
  });

  const handleSubmit: FormEventHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    authStore.login(formState).then((data) => {
      navigate('/');
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState(prevProps => ({
      ...prevProps,
      [name]: value,
    }));
  };

  return { handleSubmit, handleInputChange, formState };
};
