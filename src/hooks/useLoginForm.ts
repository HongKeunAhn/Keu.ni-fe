import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { VALIDATE_REGEX_LOGIN, ACCESS_TOKEN, ERROR_TEXT, LOGIN_PROPS, PATH } from '../constants';

type LoginFormType = {
  id: string | null;
  password: string | null;
};

const initialValidationForm = {
  id: '',
  password: '',
};

const useLoginForm = () => {
  const router = useRouter();
  const [validationForm, setValidationForm] = useState<LoginFormType>(initialValidationForm);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: 'sixshop_001', password: 'SixshopFE001' }),
    };

    const response = await fetch('/login', config);
    const {
      data: { accessToken, user },
    } = await response.json();

    if (response.status === 200) {
      alert('로그인 성공');
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      router.push(PATH.HOME);
    } else {
      alert('로그인 실패');
      router.push(PATH.LOGIN);
    }
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value, id } = event.target;

    setValidationForm(checkLoginForm(value, id));
  };

  const checkLoginForm = (value: string, id: string): LoginFormType => {
    if (id === LOGIN_PROPS.USER_ID) {
      validationForm.id = VALIDATE_REGEX_LOGIN.ID.test(value) ? null : ERROR_TEXT.ID;
    }

    if (id === LOGIN_PROPS.PASSWORD) {
      validationForm.password = VALIDATE_REGEX_LOGIN.PASSWORD.test(value)
        ? null
        : ERROR_TEXT.PASSWORD;
    }

    return { ...validationForm };
  };

  return {
    validationForm,
    handleLogin,
    handleInputBlur,
  };
};

export default useLoginForm;
