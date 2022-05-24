import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { useLoginForm } from '../hooks/';
import { Header } from '../components/header';
import { TextInput } from '../components/textInput';

import { ACCESS_TOKEN, LOGIN_PROPS } from '../constants';

const LoginPage: NextPage = () => {
  const router = useRouter();
  const { validationForm, handleLogin, handleInputBlur } = useLoginForm();

  if (typeof window !== 'undefined') {
    if (localStorage?.getItem(ACCESS_TOKEN)) {
      router.push('/');
    }
  }

  return (
    <>
      <Header />
      <Form onSubmit={handleLogin}>
        <TextInput id={LOGIN_PROPS.USER_ID} name='아이디' onBlur={handleInputBlur} />
        {validationForm.id && <p>{validationForm.id}</p>}
        <TextInput id={LOGIN_PROPS.PASSWORD} name='비밀번호' onBlur={handleInputBlur} />
        {validationForm.password && <p>{validationForm.password}</p>}
        <LoginButton
          type='submit'
          disabled={validationForm.id !== null || validationForm.password !== null}
        >
          로그인
        </LoginButton>
      </Form>
    </>
  );
};

export default LoginPage;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 0 20px 40px;
`;

const LoginButton = styled.button`
  margin-top: 40px;
  padding: 20px;
  border-radius: 12px;
  background-color: #222;
  color: #fff;
  cursor: pointer;

  &:disabled {
    background-color: #e2e2ea;
  }
`;
